import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-title">Sobre o Projeto</h2>
        <p>
          Nosso projeto foi concebido para atender às necessidades dos profissionais da área de geociências, como geólogos, geofísicos e engenheiros de petróleo, bem como de empresas do setor de petróleo e gás. Este sistema tem como objetivo integrar dados e <strong>fornecer análises avançadas</strong> que facilitem decisões estratégicas e operacionais. Além disso, a plataforma também é útil para acadêmicos e pesquisadores envolvidos em estudos geológicos e geofísicos aplicados à <strong>exploração de recursos naturais</strong>.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Motivações e Soluções Oferecidas</h2>
        <p>
          Identificamos que muitos profissionais enfrentam <strong>desafios</strong> devido ao uso de múltiplos softwares complexos, o que resulta em processos desgastantes e pouco eficientes. Para resolver isso, criamos uma plataforma centralizada e intuitiva que integra informações de diversas fontes e oferece <strong>ferramentas de análise avançadas</strong>, como modelagem geológica e previsão de reservas. Nosso objetivo é simplificar o trabalho dos usuários, permitindo que eles se concentrem na interpretação e aplicação dos dados.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Diferenciais do Sistema</h2>
        <p>
          Este sistema se destaca por sua capacidade de integrar dados variados, como levantamentos sísmicos, informações de poços e modelos geológicos, em um <strong>ambiente único e de fácil acesso</strong>. Ele também oferece personalização e flexibilidade, permitindo que cada usuário adapte a plataforma às suas necessidades específicas. Com uma interface intuitiva e limpa, mesmo aqueles sem experiência técnica avançada podem navegar e utilizar os recursos com eficiência.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Visão de Futuro</h2>
        <p>
          Estamos comprometidos em manter a relevância do sistema por meio de atualizações regulares, incorporando novos dados e funcionalidades que atendam às demandas do setor. Nosso objetivo é não apenas oferecer uma experiência de usuário fluida e eficiente, mas também <strong>contribuir para a evolução</strong> da exploração e gestão de recursos naturais. Assim, esperamos consolidar nossa plataforma como uma ferramenta indispensável para profissionais e pesquisadores da área.
        </p>
      </section>
    </div>
  );
};

export default About;
