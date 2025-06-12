
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log('Navegando para página de contato...');
    navigate('/contato');
  };

  const handleLearnMore = () => {
    console.log('Navegando para página de serviços...');
    navigate('/servicos');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Soluções de Software
            <span className="block text-primary">Personalizadas</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Desenvolvemos sistemas sob medida para impulsionar seu negócio.
            Tecnologia de ponta, qualidade garantida e suporte especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={handleGetStarted}
            >
              Começar Projeto
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={handleLearnMore}
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
