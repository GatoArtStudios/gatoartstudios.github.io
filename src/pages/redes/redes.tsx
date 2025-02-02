import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  Palette,
  Facebook,
  Youtube,
  Paintbrush,
  Twitch,
  MessagesSquare,
  BotMessageSquare,
  Music2,
  BadgeDollarSign,
} from "lucide-react";
import SocialCard from "@/components/SocialCard";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-cyan-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GatoArtStudio
          </h1>
          <p className="text-xl text-gray-600">
            Developer & Graphic Designer
          </p>
        </header>

        <ProfileSection
          title="Development"
          description="Check out my coding projects and contributions"
        >
          <SocialCard
            icon={<Github className="text-social-github" />}
            name="GitHub"
            username="@GatoArtStudios"
            link="https://github.com/GatoArtStudios"
            delay={0.1}
          />
          <SocialCard
            icon={<Linkedin className="text-social-linkedin" />}
            name="LinkedIn"
            username="Hervis Cortes"
            link="https://www.linkedin.com/in/hervis-cortes-a51130342"
            delay={0.2}
          />
          <SocialCard
            icon={<Twitter className="text-social-twitter" />}
            name="Twitter"
            username="@GatoArtStudio"
            link="https://x.com/GatoArtStudio"
            delay={0.3}
          />
        </ProfileSection>

        <ProfileSection
          title="Design"
          description="Explore my creative design work"
        >
          {/* <SocialCard
            icon={<Palette className="text-social-behance" />}
            name="Portfolio"
            username="@#"
            link="#"
            delay={0.4}
          /> */}
          {/* <SocialCard
            icon={<Dribbble className="text-social-dribbble" />}
            name="Dribbble"
            username="@#"
            link="#"
            delay={0.5}
          /> */}
          <SocialCard
            icon={<Instagram className="text-social-instagram" />}
            name="Instagram"
            username="@gatoartstudio"
            link="https://www.instagram.com/gatoartstudio"
            delay={0.6}
          />
        </ProfileSection>
        <ProfileSection
          title="Social Media"
          description="Connect with me on all social platforms"
        >
          <SocialCard
            icon={<Facebook className="text-social-facebook" color="#239fff" />}
            name="Facebook"
            username="Gatoartstudio"
            link="https://www.facebook.com/gatoartstudio"
            delay={0.7}
          />
          <SocialCard
            icon={<Youtube className="text-social-youtube" color="#ff2323"/>}
            name="YouTube"
            username="@gatoartstudio"
            link="https://www.youtube.com/@gatoartstudio"
            delay={0.8}
          />
          <SocialCard
            icon={<Twitch className="text-social-twitch" color="#c623ff"/>}
            name="Twitch"
            username="@gatoartstudio"
            link="https://www.twitch.tv/gatoartstudio"
            delay={0.9}
          />
          <SocialCard
            icon={<MessagesSquare className="text-social-twitch" color="#2aff23" />}
            name="WhatsApp"
            username="@gatoartstudio"
            link="https://wa.me/message/46M5S52TLVIGD1"
            delay={1.0}
          />
          <SocialCard
            icon={<BotMessageSquare className="text-social-twitch" color="#29c1ff"/>}
            name="Discord"
            username="GatoAS"
            link="https://discord.gg/vEmfU2REYF"
            delay={1.1}
          />
          <SocialCard
            icon={<Music2 className="text-social-twitch" color="#4b23ff"/>}
            name="Tiktok"
            username="@gatoartstudio"
            link="https://www.tiktok.com/@gatoartstudio"
            delay={1.2}
          />
          <SocialCard
            icon={<BadgeDollarSign className="text-social-twitch" color="#ff2a23"/>}
            name="Patreon"
            username="GatoArtStudio"
            link="https://www.patreon.com/GatoArtStudio"
            delay={1.3}
          />
          {/* <SocialCard
            icon={<Paintbrush className="text-social-behance" />}
            name="Behance"
            username="@#"
            link="#"
            delay={0.9}
          /> */}
        </ProfileSection>
      </div>
    </div>
  );
};

export default Index;
