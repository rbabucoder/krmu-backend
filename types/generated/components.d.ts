import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageComponentsADecadeLeftCol
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_a_decade_left_cols';
  info: {
    displayName: 'adecadeleftcol';
    icon: 'code';
  };
  attributes: {
    adecadedescription: Schema.Attribute.Text;
    adecadesubtitle: Schema.Attribute.String;
    adecadetitle: Schema.Attribute.String;
    button1link: Schema.Attribute.String;
    button1text: Schema.Attribute.String;
    button2link: Schema.Attribute.String;
    button2text: Schema.Attribute.String;
  };
}

export interface HomepageComponentsADecadeRightCol
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_a_decade_right_cols';
  info: {
    displayName: 'ADecadeRightCol';
  };
  attributes: {
    counter1content: Schema.Attribute.String;
    counter1text: Schema.Attribute.String;
    counter2content: Schema.Attribute.String;
    counter2text: Schema.Attribute.String;
    counter3content: Schema.Attribute.String;
    counter3text: Schema.Attribute.String;
    counter4content: Schema.Attribute.String;
    counter4text: Schema.Attribute.String;
  };
}

export interface HomepageComponentsADecadeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_a_decade_sections';
  info: {
    displayName: 'ADecade Section';
  };
  attributes: {
    adecadeleftcol: Schema.Attribute.Component<
      'homepage-components.a-decade-left-col',
      false
    >;
    adecaderightcol: Schema.Attribute.Component<
      'homepage-components.a-decade-right-col',
      false
    >;
  };
}

export interface HomepageComponentsAfsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_afs_sections';
  info: {
    displayName: 'AFS section';
    icon: 'arrowRight';
  };
  attributes: {
    afs1content: Schema.Attribute.String;
    afs2content: Schema.Attribute.String;
    afs3content: Schema.Attribute.String;
    afsimage1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    afsimage2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    afsimage3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageComponentsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'crown';
  };
  attributes: {
    HeroSectionVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsYourjourney extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_yourjourneys';
  info: {
    displayName: 'yourjourney';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    buttonclass: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
  };
}

export interface SharedCounterComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_counter_components';
  info: {
    displayName: 'Counter Component';
  };
  attributes: {
    countercontent: Schema.Attribute.String;
    countertext: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage-components.a-decade-left-col': HomepageComponentsADecadeLeftCol;
      'homepage-components.a-decade-right-col': HomepageComponentsADecadeRightCol;
      'homepage-components.a-decade-section': HomepageComponentsADecadeSection;
      'homepage-components.afs-section': HomepageComponentsAfsSection;
      'homepage-components.hero-section': HomepageComponentsHeroSection;
      'homepage-components.yourjourney': HomepageComponentsYourjourney;
      'shared.button': SharedButton;
      'shared.counter-component': SharedCounterComponent;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
