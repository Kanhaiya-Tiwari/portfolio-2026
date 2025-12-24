'use client';

import OutputBlock from '../../components/OutputBlock';
import { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Lock, Eye, Zap, Code, Network, 
  Database, Server, Cpu, HardDrive, Activity, AlertTriangle,
  CheckCircle, XCircle, Loader, ArrowRight
} from 'lucide-react';

export default function HackerPage() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [systems, setSystems] = useState([
    { id: 1, name: 'SECURITY_PROTOCOLS', status: 'ACTIVE', color: '#00ff00' },
    { id: 2, name: 'NETWORK_SCANNER', status: 'SCANNING', color: '#00bfff' },
    { id: 3, name: 'ENCRYPTION_MODULE', status: 'ACTIVE', color: '#00ff00' },
    { id: 4, name: 'FIREWALL_SYSTEM', status: 'ACTIVE', color: '#00ff00' },
    { id: 5, name: 'INTRUSION_DETECTION', status: 'WARNING', color: '#ffff00' },
  ]);
  const [logs, setLogs] = useState<string[]>([]);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    // Matrix rain effect
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixArray: string[] = [];
    for (let i = 0; i < 50; i++) {
      matrixArray.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    setMatrixChars(matrixArray);

    // Scanning progress
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setIsScanning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // System logs
    const logMessages = [
      '> Initializing security protocols...',
      '> Scanning network infrastructure...',
      '> Analyzing system vulnerabilities...',
      '> Encrypting data streams...',
      '> Firewall rules updated',
      '> Intrusion detection system active',
      '> Monitoring network traffic...',
      '> System integrity check complete',
    ];

    const logInterval = setInterval(() => {
      if (logs.length < logMessages.length) {
        setLogs(prev => [...prev, logMessages[logs.length]]);
      }
    }, 1500);

    return () => {
      clearInterval(scanInterval);
      clearInterval(logInterval);
    };
  }, [logs.length]);

  return (
    <div className="relative">
      {/* Matrix background effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="grid grid-cols-10 gap-2 p-4 h-full">
          {matrixChars.map((char, idx) => (
            <div
              key={idx}
              className="text-terminalGreen text-xs animate-matrix"
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <OutputBlock>
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Terminal size={48} style={{ color: '#00ff00', animation: 'pulseGlow 2s ease-in-out infinite' }} />
                <div>
                  <h1 className="text-4xl font-bold mb-2 animate-glow" style={{ 
                    color: '#00ff00',
                    textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
                  }}>
                    {'>'} KANHA SUCURITY TERMINAL
                  </h1>
                  <p className="text-terminalGray text-sm animate-flicker">
                    $ Advanced Security & Network Analysis System
                  </p>
                </div>
              </div>
            </div>

            {/* System Status Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#00bfff' }}>
                {'>'} SYSTEM STATUS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {systems.map((system) => (
                  <div
                    key={system.id}
                    className="p-4 rounded-lg border-2 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: system.color,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      boxShadow: `0 0 10px ${system.color}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${system.color}, 0 0 40px ${system.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 10px ${system.color}40`;
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm" style={{ color: system.color }}>
                        {system.name}
                      </span>
                      {system.status === 'ACTIVE' && <CheckCircle size={20} style={{ color: system.color }} />}
                      {system.status === 'SCANNING' && <Loader size={20} style={{ color: system.color }} className="animate-spin" />}
                      {system.status === 'WARNING' && <AlertTriangle size={20} style={{ color: system.color }} />}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: system.status === 'ACTIVE' ? '100%' : system.status === 'SCANNING' ? '60%' : '80%',
                            backgroundColor: system.color,
                            boxShadow: `0 0 10px ${system.color}`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold" style={{ color: system.color }}>
                        {system.status}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 text-xs opacity-50" style={{ color: system.color }}>
                      {'>'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scanning Progress */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff5555' }}>
                {'>'} NETWORK SCAN PROGRESS
              </h2>
              <div className="p-6 rounded-lg border-2" style={{ borderColor: '#ff5555', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-terminalGray">Scanning network infrastructure...</span>
                  <span className="font-bold" style={{ color: '#ff5555' }}>{scanProgress}%</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-300 relative"
                    style={{ 
                      width: `${scanProgress}%`,
                      background: 'linear-gradient(90deg, #ff5555, #ff0080)',
                      boxShadow: '0 0 20px #ff5555',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-scan"></div>
                  </div>
                </div>
                {isScanning && (
                  <p className="text-terminalGray text-sm mt-2 animate-flicker">
                    {'$'} Analyzing {Math.floor(Math.random() * 1000) + 100} network nodes...
                  </p>
                )}
                {!isScanning && (
                  <p className="text-terminalGreen text-sm mt-2">
                    {'$'} Scan complete! All systems operational.
                  </p>
                )}
              </div>
            </div>

            {/* System Logs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#00ffff' }}>
                {'>'} SYSTEM LOGS
              </h2>
              <div className="p-6 rounded-lg border-2 font-mono text-sm max-h-64 overflow-y-auto" style={{ 
                borderColor: '#00ffff', 
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              }}>
                {logs.map((log, idx) => (
                  <div 
                    key={idx} 
                    className="mb-1 animate-slideIn"
                    style={{ 
                      color: idx % 2 === 0 ? '#00ffff' : '#00ff00',
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    {log}
                  </div>
                ))}
                {logs.length > 0 && (
                  <div className="flex items-center gap-2 mt-2 text-terminalGray">
                    <ArrowRight size={16} />
                    <span className="animate-blink">_</span>
                  </div>
                )}
              </div>
            </div>

            {/* Security Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: 'Security Level', value: '98%', color: '#00ff00' },
                { icon: Lock, label: 'Encryption', value: 'AES-256', color: '#00bfff' },
                { icon: Eye, label: 'Monitoring', value: '24/7', color: '#ff5555' },
                { icon: Zap, label: 'Response Time', value: '<50ms', color: '#ffff00' },
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 text-center cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      borderColor: metric.color,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      boxShadow: `0 0 10px ${metric.color}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${metric.color}, 0 0 40px ${metric.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 10px ${metric.color}40`;
                    }}
                  >
                    <Icon size={32} style={{ color: metric.color }} className="mx-auto mb-2" />
                    <p className="text-xs text-terminalGray mb-1">{metric.label}</p>
                    <p className="font-bold text-lg" style={{ color: metric.color }}>{metric.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Warning Banner */}
            <div className="mt-8 p-4 rounded-lg border-2 animate-pulseGlow" style={{ 
              borderColor: '#ffff00',
              backgroundColor: 'rgba(255, 255, 0, 0.1)',
              boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)',
            }}>
              <div className="flex items-center gap-2">
                <AlertTriangle size={24} style={{ color: '#ffff00' }} />
                <p className="text-terminalGray">
                  <span className="font-bold" style={{ color: '#ffff00' }}>WARNING:</span> This is a demonstration terminal interface. All displayed data is simulated.
                </p>
              </div>
            </div>
          </div>
        </OutputBlock>
      </div>
    </div>
  );
}

