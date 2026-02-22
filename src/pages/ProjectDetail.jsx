import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Project data (demo field removed)
  const projects = {
    '1': {
      id: '1',
      title: 'This Portfolio',
      fullTitle: 'Terminal Portfolio Website',
      description: 'An interactive terminal-style portfolio website built with React',
      longDescription: 'A unique portfolio that mimics a terminal interface. Users can navigate through my information using command-line commands. Features include command history, responsive design, and an authentic terminal feel.',
      tech: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
      features: [
        'Interactive command-line interface',
        'Command history with up/down arrows',
        'Responsive design for all devices',
        'Custom commands (help, about, skills, etc.)',
        'Smooth scrolling terminal output'
      ],
      status: 'Completed',
      date: '2024',
      image: '/commo.png', // Only used if id === '2', otherwise ignored
      challenges: 'Creating an authentic terminal feel while maintaining usability',
      learnings: 'React hooks, state management, terminal emulation logic'
    },
    
    '2': {
      id: '2',
      title: 'Document and Task monitoring System',
      fullTitle: 'Document & Task Management System',
      description: 'A comprehensive system for tracking documents and tasks in real-time',
      longDescription: 'Enterprise-level solution for organizations to track document flow, assign tasks, and monitor progress. Includes user roles, notifications, and detailed analytics.',
      tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.IO'],
      features: [
        'Document upload and tracking',
        'Task assignment and deadlines',
        'Real-time notifications',
        'User roles and permissions',
        'Analytics dashboard'
      ],
      status: 'Completed',
      date: '2024',
      image: '/commo.png', // This is the screenshot that will be shown
      challenges: 'Real-time updates and complex data relationships',
      learnings: 'WebSocket implementation, complex database design'
    },
    
    '3': {
      id: '3',
      title: 'Mobile Chat App',
      fullTitle: 'Real-time Mobile Chat Application',
      description: 'Cross-platform mobile chat app with Node.js server, WebRTC, and WebSocket',
      longDescription: 'A feature-rich chat application built with React Native for mobile. Uses Node.js backend with WebSocket for real-time messaging and WebRTC for video/audio calls. Data persistence with MySQL/MariaDB.',
      tech: [
        'Node.js',
        'React Native',
        'WebRTC',
        'WebSocket',
        'MySQL',
        'MariaDB',
        'Express'
      ],
      features: [
        'Real-time messaging with WebSocket',
        'Video/audio calls using WebRTC',
        'Group chats and private messaging',
        'Media sharing (images, videos, files)',
        'Message history with MySQL/MariaDB',
        'Push notifications',
        'User authentication',
        'Online/offline status',
        'Typing indicators',
        'Read receipts'
      ],
      status: 'Halted',
      date: '2024',
      image: '/commo.png',
      challenges: 'WebRTC signaling server implementation, database optimization for real-time messages, cross-platform compatibility',
      learnings: 'WebSocket architecture, WebRTC peer connections, database indexing for chat history'
    },
    
    '4': {
      id: '4',
      title: 'Remote Desktop App',
      fullTitle: 'Remote Desktop Control Application',
      description: 'Secure remote desktop application built with Java and MySQL',
      longDescription: 'A robust remote desktop solution built with Java for cross-platform compatibility. Uses MySQL for user authentication, session management, and connection logs. Features secure encrypted connections and multi-user support.',
      tech: [
        'Java',
        'MySQL',
        'Swing/JavaFX',
        'Socket Programming',
        'RMI (Remote Method Invocation)',
        'SSL/TLS',
        'JDBC'
      ],
      features: [
        'Remote desktop control',
        'File transfer between systems',
        'User authentication with MySQL',
        'Session logging and monitoring',
        'Multi-user concurrent access',
        'End-to-end encryption',
        'Screen sharing and recording',
        'Chat during remote sessions'
      ],
      status: 'Halted',
      date: '2024',
      image: '/commo.png',
      challenges: 'Low latency screen capture and transmission, concurrent connection handling, database optimization for session logs',
      learnings: 'Java socket programming, threading for concurrent connections, database connection pooling, encryption implementation'
    },
    
    '5': {
      id: '5',
      title: 'Remote screen monitoring App',
      fullTitle: 'Screen Monitoring & Analytics Tool',
      description: 'Real-time screen monitoring built with .NET Core and SignalR',
      longDescription: 'A powerful screen monitoring and analytics tool built on .NET Core. Uses SignalR for real-time WebSocket communication to stream screen data, track activities, and provide productivity insights. Perfect for team management and productivity analysis.',
      tech: [
        '.NET Core',
        'C#',
        'SignalR',
        'WebSocket',
        'Entity Framework Core',
        'SQL Server',
        'React',
        'TypeScript'
      ],
      features: [
        'Real-time screen monitoring with SignalR',
        'WebSocket-based live streaming',
        'Activity tracking and logging',
        'Productivity analytics dashboard',
        'User session management',
        'Screenshot capture and recording',
        'Real-time alerts and notifications',
        'Historical data analysis',
        'Team performance metrics',
        'Privacy controls and permissions'
      ],
      status: 'On Development',
      date: '2024',
      image: '/commo.png',
      challenges: 'Real-time video streaming over WebSocket, SignalR connection management, database performance for continuous monitoring data',
      learnings: '.NET Core WebSocket implementation, SignalR for real-time features, C# async programming patterns'
    }
  };

  const project = projects[id] || projects['1'];

  const renderArchitectureHighlight = (id) => {
    switch(id) {
      case '3':
        return (
          <div className="border border-green-400/30 rounded-lg p-4 mt-4 bg-green-400/5">
            <div className="text-green-400 mb-2">📱 MOBILE CHAT ARCHITECTURE</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Server:</span>
                <span className="text-green-300">Node.js + Express</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Client:</span>
                <span className="text-green-300">React Native</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Real-time:</span>
                <span className="text-green-300">WebSocket + WebRTC</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Database:</span>
                <span className="text-green-300">MySQL/MariaDB</span>
              </div>
            </div>
          </div>
        );
      
      case '4':
        return (
          <div className="border border-green-400/30 rounded-lg p-4 mt-4 bg-green-400/5">
            <div className="text-green-400 mb-2">🖥️ REMOTE DESKTOP ARCHITECTURE</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Client/Server:</span>
                <span className="text-green-300">Java</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Database:</span>
                <span className="text-green-300">MySQL</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Communication:</span>
                <span className="text-green-300">Socket Programming</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Security:</span>
                <span className="text-green-300">SSL/TLS</span>
              </div>
            </div>
          </div>
        );
      
      case '5':
        return (
          <div className="border border-green-400/30 rounded-lg p-4 mt-4 bg-green-400/5">
            <div className="text-green-400 mb-2">⚡ .NET CORE ARCHITECTURE</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Backend:</span>
                <span className="text-green-300">.NET Core + C#</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Real-time:</span>
                <span className="text-green-300">SignalR + WebSocket</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Database:</span>
                <span className="text-green-300">SQL Server + EF Core</span>
              </div>
              <div className="border border-green-400/30 rounded p-2">
                <span className="text-green-400 block mb-1">Frontend:</span>
                <span className="text-green-300">React + TypeScript</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-green-500">
              <span className="text-purple-400">$</span> Real-time screen streaming using SignalR WebSockets with .NET Core backend
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      {/* Terminal Window */}
      <div className="max-w-6xl mx-auto bg-black border border-green-400 rounded-lg shadow-2xl">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-t-lg border-b border-green-400">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-2 text-green-400 text-sm">jan@portfolio: ~/projects/{id}</span>
          <span className="ml-auto text-xs text-zinc-400">📁 Project Details</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono">
          
          {/* Project Header */}
          <div className="mb-6">
            <div className="text-purple-400 mb-2">$ cat project-{id}/README.md</div>
            <h1 className="text-3xl text-green-400 font-bold mb-2">{project.fullTitle}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-green-500">Status: {project.status}</span>
              <span className="text-green-500">Date: {project.date}</span>
              <span className={`px-2 py-1 rounded text-xs ${
                project.status === 'Completed' ? 'bg-green-400 text-black' :
                project.status === 'In Development' ? 'bg-yellow-400 text-black' :
                project.status === 'In Progress' ? 'bg-blue-400 text-black' :
                'bg-purple-400 text-black'
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column - Screenshot */}
            <div className="border border-green-400/30 rounded-lg p-4">
              <div className="text-green-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm">📸 SCREENSHOT</span>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-4 border border-green-400/30">
                {id === '2' ? (
                  // Show actual image only for Project 2
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg border border-green-400"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/commo.png';
                    }}
                  />
                ) : (
                  // NDA message for all other projects
                  <div className="aspect-video bg-black flex items-center justify-center border border-green-400/50 rounded p-6 text-center">
                    <span className="text-green-500 text-sm">
                      ⚠️ Cannot show screenshots due to Non-Disclosure Agreement
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Actions section removed */}
            </div>

            {/* Right Column - Project Info */}
            <div className="space-y-4">
              {/* Description */}
              <div className="border border-green-400/30 rounded-lg p-4">
                <div className="text-green-400 mb-2">📄 DESCRIPTION</div>
                <p className="text-green-300 text-sm leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="border border-green-400/30 rounded-lg p-4">
                <div className="text-green-400 mb-2">⚙️ TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-zinc-800 text-green-400 px-3 py-1 rounded border border-green-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="border border-green-400/30 rounded-lg p-4">
                <div className="text-green-400 mb-2">✨ FEATURES</div>
                <ul className="list-disc list-inside text-green-300 text-sm space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Architecture Highlight */}
              {renderArchitectureHighlight(id)}

              {/* Challenges & Learnings */}
              <div className="border border-green-400/30 rounded-lg p-4">
                <div className="text-green-400 mb-2">📚 CHALLENGES & LEARNINGS</div>
                <div className="text-green-300 text-sm">
                  <div className="mb-2">
                    <span className="text-green-400">Challenge:</span> {project.challenges}
                  </div>
                  <div>
                    <span className="text-green-400">Learning:</span> {project.learnings}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Navigation */}
          <div className="mt-8 pt-4 border-t border-green-400/30 flex flex-wrap gap-4 justify-between items-center">
            <Link 
              to="/"
              className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors text-sm"
            >
              ← Back to Terminal
            </Link>
            
            <div className="text-xs text-green-500">
              <span className="text-purple-400">$</span> echo "Project {id} loaded successfully"
            </div>

            <button 
              onClick={() => window.close()}
              className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors text-sm"
            >
              Close Tab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;