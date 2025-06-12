
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    console.log('Redirecionando para página de contato...');
    navigate('/contato');
  };

  const services = [
    {
      icon: <div className="w-6 h-6 bg-primary rounded"></div>,
      title: 'Desenvolvimento Web',
      description: 'Sites e sistemas web modernos, responsivos e otimizados.',
      features: ['React & Next.js', 'APIs RESTful', 'Performance Otimizada', 'SEO Avançado']
    },
    {
      icon: <div className="w-6 h-6 bg-primary rounded-full"></div>,
      title: 'Sistemas Corporativos',
      description: 'Soluções empresariais robustas e escaláveis.',
      features: ['ERP Personalizado', 'CRM Integrado', 'Business Intelligence', 'Automação']
    },
    {
      icon: <div className="w-6 h-6 bg-primary transform rotate-45"></div>,
      title: 'Consultoria Tech',
      description: 'Orientação estratégica para transformação digital.',
      features: ['Análise de Sistemas', 'Arquitetura de Software', 'Code Review', 'Treinamento']
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em desenvolvimento de software
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato conosco e vamos transformar suas ideias em software.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 hover-scale"
            onClick={handleContactClick}
          >
            Falar com Nossa Equipe
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
