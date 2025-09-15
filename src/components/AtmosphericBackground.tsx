'use client';

export default function AtmosphericBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Primary Cloud Layer */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/images/clouds.svg" 
          alt="Ethereal clouds" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Secondary Atmospheric Layer */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/atmosphere.svg" 
          alt="Atmospheric layers" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-pink-900/20"></div>
      
      {/* Ethereal Cloud Effect */}
      <div className="ethereal-clouds"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-300/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-300/10 to-transparent transform -skew-x-12"></div>
      </div>
    </div>
  );
}
