import { Container } from '../../ui';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';

export const Footer = () => {
  return (
    <footer className="bg-audiophile-black text-white">
      <Container>
        {/* Orange accent line at the very top */}
        <div className="w-24 h-1 bg-audiophile-orange"></div>
        
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>

              <h2 className="text-h5 font-bold mb-8 tracking-wide">audiophile</h2>
              
              {/* Navigation */}
              <nav className="mb-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <a href="/" className="text-subtitle hover:text-audiophile-orange transition-colors duration-200">
                    HOME
                  </a>
                  <a href="/headphones" className="text-subtitle hover:text-audiophile-orange transition-colors duration-200">
                    HEADPHONES
                  </a>
                  <a href="/speakers" className="text-subtitle hover:text-audiophile-orange transition-colors duration-200">
                    SPEAKERS
                  </a>
                  <a href="/earphones" className="text-subtitle hover:text-audiophile-orange transition-colors duration-200">
                    EARPHONES
                  </a>
                </div>
              </nav>
              
              {/* Description */}
              <p className="text-body text-gray-400 max-w-lg leading-relaxed">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            
            {/* Right section - Social media */}
            <div className="lg:flex lg:justify-end lg:items-start">
              <div className="flex gap-4 mt-8 lg:mt-0">
                <a 
                  href="#" 
                  className="text-white hover:text-audiophile-orange transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-audiophile-orange transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-audiophile-orange transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-body text-gray-500">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
