
import React from 'react';

interface ReasonCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="reason-card bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ReasonsSection = () => {
  const reasons = [
    {
      title: "Impacto Social",
      description: "Suas doações ajudam diretamente famílias e indivíduos em situação de vulnerabilidade.",
      icon: "❤️",
      delay: 1
    },
    {
      title: "Transparência",
      description: "100% dos valores arrecadados são destinados aos projetos sociais, com relatórios mensais.",
      icon: "📊",
      delay: 2
    },
    {
      title: "Facilidade",
      description: "Doar é fácil e rápido! Até mesmo pequenas quantias fazem grande diferença.",
      icon: "💸",
      delay: 3
    },
    {
      title: "Reconhecimento",
      description: "Todos os doadores são reconhecidos e podem acompanhar o impacto de suas contribuições.",
      icon: "🏆",
      delay: 4
    },
    {
      title: "Contribuição Local",
      description: "As doações impactam diretamente a sua comunidade local, gerando desenvolvimento.",
      icon: "🏙️",
      delay: 5
    },
    {
      title: "Educação e Saúde",
      description: "Apoiamos programas de educação e saúde para crianças e jovens em situação de vulnerabilidade.",
      icon: "📚",
      delay: 6
    },
  ];

  return (
    <section id="reasons" className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que deveríamos doar notinhas?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              delay={reason.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
