import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const Curriculum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={() => navigate("/")}
          variant="outline" 
          className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Sidebar - Informações Pessoais */}
          <div className="space-y-6">
            <Card className="bg-gradient-card backdrop-blur-sm border-white/20 shadow-elegant">
              <CardHeader className="text-center">
                <img 
                  src={profilePhoto} 
                  alt="Luiz Gustavo Santos Cunha"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
                />
                <CardTitle className="text-xl font-bold text-primary">
                  Luiz Gustavo Santos Cunha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Patamares Salvador-BA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+55 (71) 991156488</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="break-all">luiz.gustavo.cunha2003@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>17.10.2003</span>
                </div>
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card className="bg-gradient-card backdrop-blur-sm border-white/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• HTML/CSS</div>
                  <div>• Java Script intermediário</div>
                  <div>• Conhecimento intermediário de Excel</div>
                  <div>• Pacote Office básico</div>
                  <div>• Inglês avançado</div>
                </div>
              </CardContent>
            </Card>

            {/* Formação */}
            <Card className="bg-gradient-card backdrop-blur-sm border-white/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">Formação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Infinity School</h4>
                  <p className="text-sm text-muted-foreground">2023 - Hoje</p>
                  <p className="text-sm">Certificado Programação</p>
                </div>
                <div>
                  <h4 className="font-semibold">Engenharia de Computação | Senai CIMATEC</h4>
                  <p className="text-sm text-muted-foreground">2022 - Hoje</p>
                  <p className="text-sm">Bacharelado 4º Semestre</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-2 space-y-6">
            {/* Sobre */}
            <Card className="bg-gradient-card backdrop-blur-sm border-white/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">Sobre mim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Sou um estudante dedicado da Engenharia de Computação, apaixonado por tecnologia e dedicado ao trabalho que faço. Acredito que a tecnologia é uma poderosa ferramenta para todos, capaz de transformar e melhorar a vida das pessoas. Meu objetivo é utilizar o meu conhecimento para criar soluções que promovam um impacto positivo na sociedade.
                </p>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card className="bg-gradient-card backdrop-blur-sm border-white/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">Experiência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Empresa Junior CIMATEC</h4>
                    <span className="text-sm text-muted-foreground">11.2023 - Hoje</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">JUNIOR Novembro 2023 - presente</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Encarregado de auxiliar no desenvolvimento e implementação de projetos de software, abrangendo aplicações móveis, websites e sistemas web;</li>
                    <li>Responsável pela gestão das planilhas financeiras da empresa;</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">CIMATEC Finance (Liga financeira)</h4>
                    <span className="text-sm text-muted-foreground">08.2023 - Hoje</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">Membro de Comunicação</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Responsável por estabelecer contato direto com escritórios de investimentos;</li>
                    <li>Estabelecer parcerias estratégicas;</li>
                    <li>Organização de eventos;</li>
                    <li>Gerenciar formalidades com a faculdade.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">OUTROS</h4>
                    <span className="text-sm text-muted-foreground">02.2023 - Hoje</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">Extras</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>2023 - Intercâmbio cultural em Toronto estudando no ILAC (International Language Academy of Canada) - com certificado</li>
                    <li>2023 - Tradutor na CCS (Conference of Complex Systems) em Salvador</li>
                    <li>2024 - Trabalho Social para igreja</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;