
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';

const Servicos = () => {
  const allServices = [
    {
      icon: <div className="w-6 h-6 bg-primary rounded"></div>,
      title: 'Design UI/UX',
      description: 'Criamos interfaces intuitivas que encantam usuários e geram resultados.',
      features: ['Design System Completo', 'Prototipagem Interativa', 'Testes de Usabilidade', 'Design Responsivo', 'Acessibilidade (WCAG)']
    },
    {
      icon: <div className="w-6 h-6 bg-primary rounded-full"></div>,
      title: 'Desenvolvimento Frontend',
      description: 'Aplicações web modernas, rápidas e otimizadas para performance.',
      features: ['React & Next.js', 'TypeScript', 'Performance Otimizada', 'PWA', 'Testes Automatizados']
    },
    {
      icon: <div className="w-6 h-6 bg-primary transform rotate-45"></div>,
      title: 'Desenvolvimento Backend',
      description: 'APIs robustas e escaláveis para sustentar suas aplicações.',
      features: ['APIs RESTful', 'Microserviços', 'Banco de Dados', 'Autenticação', 'Monitoramento']
    },
    {
      icon: <div className="w-6 h-6 bg-primary rounded-lg transform rotate-12"></div>,
      title: 'E-commerce',
      description: 'Lojas virtuais completas que convertem visitantes em clientes.',
      features: ['Plataforma Customizada', 'Pagamentos Seguros', 'Gestão de Estoque', 'Analytics', 'SEO Otimizado']
    },
    {
      icon: <div className="w-6 h-6 bg-primary clip-path-triangle"></div>,
      title: 'Consultoria Digital',
      description: 'Estratégias digitais para acelerar o crescimento do seu negócio.',
      features: ['Análise de Mercado', 'Arquitetura de Software', 'Otimização de Processos', 'Treinamento', 'Roadmap Tecnológico']
    },
    {
      icon: <div className="w-6 h-6 bg-primary rounded-full border-2 border-background"></div>,
      title: 'Manutenção & Suporte',
      description: 'Suporte contínuo para manter suas aplicações sempre atualizadas.',
      features: ['Suporte 24/7', 'Atualizações Regulares', 'Backup Automático', 'Monitoramento', 'Resolução de Problemas']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Soluções completas em tecnologia para impulsionar seu negócio digital.
            Da concepção à implementação, cuidamos de cada detalhe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-muted-foreground">
              Uma metodologia comprovada para entregar resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Descoberta', description: 'Entendemos suas necessidades e objetivos' },
              { step: '02', title: 'Planejamento', description: 'Criamos uma estratégia personalizada' },
              { step: '03', title: 'Execução', description: 'Desenvolvemos com agilidade e qualidade' },
              { step: '04', title: 'Entrega', description: 'Lançamos e oferecemos suporte contínuo' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 hover-scale">
            Solicitar Orçamento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
