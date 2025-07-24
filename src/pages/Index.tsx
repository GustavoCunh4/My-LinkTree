import { LinkButton } from "@/components/ui/link-button";
import { FileText, Mail, Instagram, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/imagem_social.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = "mailto:luiz.gustavo.cunha2003@gmail.com";
  };

  const handleCurriculumClick = () => {
    navigate("/curriculo");
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          {/* Foto de perfil */}
          <div className="relative mb-6">
            <img 
              src={profilePhoto} 
              alt="Luiz Gustavo Santos Cunha"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 shadow-elegant"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Nome e descrição */}
          <h1 className="text-2xl font-bold text-white mb-2">
            Luiz Gustavo Santos Cunha
          </h1>
          <p className="text-white/80 mb-2">Estudante de Engenharia de Computação</p>
          <p className="text-white/70 text-sm">Salvador, Bahia 🇧🇷</p>
        </div>

        {/* Botões de links */}
        <div className="space-y-4">
          <LinkButton 
            href="/curriculo"
            icon={FileText}
            label="Ver Currículo"
            onClick={handleCurriculumClick}
          />
          
          <LinkButton 
            href="mailto:luiz.gustavo.cunha2003@gmail.com"
            icon={Mail}
            label="Enviar Email"
            onClick={handleEmailClick}
          />
          
          <LinkButton 
            href="https://instagram.com/guga_cunha_"
            icon={Instagram}
            label="Instagram @guga_cunha_"
          />
          
          <LinkButton 
            href="https://tiktok.com/@guga_cunhaa"
            icon={Music}
            label="TikTok @guga_cunhaa"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/50 text-xs">
            Conecte-se comigo nas redes sociais! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;