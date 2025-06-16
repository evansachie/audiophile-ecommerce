import { Container, Section, Heading, Text } from '../../ui';
import { ResponsiveImage } from '../../ui';

export const AboutSection = () => {
  const aboutImage = {
    mobile: './assets/shared/mobile/image-best-gear.jpg',
    tablet: './assets/shared/tablet/image-best-gear.jpg',
    desktop: './assets/shared/desktop/image-best-gear.jpg'
  };

  return (
    <Section spacing="xl" background="light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Heading level={2} className="mb-8">
              <div>BRINGING YOU THE</div>
              <div>
                <span className="text-audiophile-orange">BEST</span> AUDIO GEAR
              </div>
            </Heading>
            
            <Text color="gray" className="leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </Text>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <ResponsiveImage
              image={aboutImage}
              alt="Person listening to music"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
