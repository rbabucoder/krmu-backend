import type { Schema, Struct } from '@strapi/strapi';

export interface AboutwhychooseusComponentWhyChooseUs
  extends Struct.ComponentSchema {
  collectionName: 'components_aboutwhychooseus_component_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    achievementsdescriptions: Schema.Attribute.Text;
    achievementstitle: Schema.Attribute.String;
    awardstitle: Schema.Attribute.String;
    badgeheading: Schema.Attribute.String;
    beforehighlighttitletext: Schema.Attribute.String;
    beforetitlebluetext: Schema.Attribute.String;
    maindescription: Schema.Attribute.Text;
    ourachievements: Schema.Attribute.Component<'shared.achievements', true>;
    titlebluetext: Schema.Attribute.String;
    titlehighlighttext: Schema.Attribute.String;
  };
}

export interface AdmissionpageComponentsAcademicExcellence
  extends Struct.ComponentSchema {
  collectionName: 'components_admissionpage_components_academic_excellences';
  info: {
    displayName: 'Academic Excellence';
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
  };
}

export interface AdmissionpageComponentsAdmissionprocesscomponent
  extends Struct.ComponentSchema {
  collectionName: 'components_admissionpage_components_admissionprocesscomponents';
  info: {
    displayName: 'admissionprocesscomponent';
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    beforehighlight: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    descriptions2: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
    needhelplink: Schema.Attribute.String;
    needhelplinktext: Schema.Attribute.String;
    needhelptext: Schema.Attribute.String;
    readytobeginsbtns: Schema.Attribute.Component<'shared.button', true>;
    title2: Schema.Attribute.String;
  };
}

export interface AdmissionpageComponentsAlumni extends Struct.ComponentSchema {
  collectionName: 'components_admissionpage_components_alumni';
  info: {
    displayName: 'Alumni';
  };
  attributes: {
    alumniinfo: Schema.Attribute.Component<'shared.cardwithoutimg', true>;
    beforehighlighttext: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
  };
}

export interface AdmissionpageComponentsFeeDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_admissionpage_components_fee_details';
  info: {
    displayName: 'Fee Details';
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
    paymentinfocontent: Schema.Attribute.Text;
    paymentinfotitle: Schema.Attribute.String;
  };
}

export interface AdmissionpageComponentsLocation
  extends Struct.ComponentSchema {
  collectionName: 'components_admissionpage_components_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
  };
}

export interface AdmissionvisitusComponentAcademic
  extends Struct.ComponentSchema {
  collectionName: 'components_admissionvisitus_component_academics';
  info: {
    displayName: 'Academic';
  };
  attributes: {};
}

export interface AwardsRecognitionAwardsAndRecognition
  extends Struct.ComponentSchema {
  collectionName: 'components_awards_recognition_awards_and_recognitions';
  info: {
    displayName: 'Awards & Recognition';
  };
  attributes: {};
}

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

export interface HomepageComponentsElevateCampus
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_elevate_campuses';
  info: {
    displayName: 'ElevateCampus';
  };
  attributes: {
    elevatecampus1: Schema.Attribute.Component<
      'homepage-components.elevate-campus1',
      false
    >;
    ElevateCampus2: Schema.Attribute.Component<
      'homepage-components.elevatecampus2',
      false
    >;
    elevatecampus3: Schema.Attribute.Component<
      'homepage-components.elevatecampus3',
      false
    >;
    elevatecampusimage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    elevatecampusimage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    elevatecampusimage3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageComponentsElevateCampus1
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_elevate_campus1s';
  info: {
    displayName: 'ElevateCampus1';
  };
  attributes: {
    afterhighlighttext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    highlighttext: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkclass: Schema.Attribute.String;
    linktext: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsElevatecampus2
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_elevatecampus2s';
  info: {
    displayName: 'elevatecampus2';
  };
  attributes: {
    afterhighlighttext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    content: Schema.Attribute.String;
    highlighttext: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkclass: Schema.Attribute.String;
    linktext: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsElevatecampus3
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_elevatecampus3s';
  info: {
    displayName: 'elevatecampus3';
  };
  attributes: {
    afterhighlighttext: Schema.Attribute.String;
    beforehighlighttext: Schema.Attribute.String;
    content: Schema.Attribute.String;
    highlighttext: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkclass: Schema.Attribute.String;
    linktext: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsFeeScholar extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_fee_scholars';
  info: {
    displayName: 'Fee Scholar';
  };
  attributes: {
    FeeStructureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ScholarshipImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
  };
}

export interface HomepageComponentsGlobalPartener
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_global_parteners';
  info: {
    displayName: 'Global Partener';
  };
  attributes: {
    descriptions: Schema.Attribute.Text;
    logosliderheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface HomepageComponentsHomeEventsAndNews
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_home_events_and_news';
  info: {
    displayName: 'Home Events and News';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsHomeTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_home_testimonials';
  info: {
    displayName: 'Home Testimonials';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsOurTopRecruiters
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_our_top_recruiters';
  info: {
    displayName: 'Our Top Recruiters';
  };
  attributes: {
    counter: Schema.Attribute.Component<'shared.counter-component', true>;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsShapingFuture
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_shaping_futures';
  info: {
    displayName: 'Shaping Future';
  };
  attributes: {
    afterhighlighttext: Schema.Attribute.String;
    descriptions: Schema.Attribute.Text;
    highlightext: Schema.Attribute.String;
    link1: Schema.Attribute.String;
    link1text: Schema.Attribute.String;
    link2: Schema.Attribute.String;
    link2text: Schema.Attribute.String;
    shapingCounter: Schema.Attribute.Component<
      'shared.counter-component',
      true
    >;
    shapingimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsVisitExplore extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_visit_explores';
  info: {
    displayName: 'Visit Explore';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    visitexplorebtn: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface HomepageComponentsWhykrmu extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_whykrmus';
  info: {
    displayName: 'whykrmu';
  };
  attributes: {
    Descriptions: Schema.Attribute.Text;
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

export interface ProcardProcard extends Struct.ComponentSchema {
  collectionName: 'components_procard_procards';
  info: {
    displayName: 'procard';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface SharedAboutHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctas: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAchievements extends Struct.ComponentSchema {
  collectionName: 'components_shared_achievements';
  info: {
    displayName: 'Achievements';
  };
  attributes: {
    content: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_shared_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    breadcrumbbgcolor: Schema.Attribute.String;
    breadcrumbtext: Schema.Attribute.String;
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

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    cardclass: Schema.Attribute.String;
    cardcontent: Schema.Attribute.Text;
    cardimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardWithImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_with_images';
  info: {
    displayName: 'CardWithImage';
  };
  attributes: {
    cardimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCardWithImageLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_with_image_links';
  info: {
    displayName: 'CardWithImageLink';
  };
  attributes: {
    cardimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardtitle: Schema.Attribute.String;
    cardurl: Schema.Attribute.String;
  };
}

export interface SharedCardwithoutimg extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardwithoutimgs';
  info: {
    displayName: 'cardwithoutimg';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_cards';
  info: {
    displayName: 'Contact Info Card';
  };
  attributes: {};
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

export interface SharedDepartmentContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_department_containers';
  info: {
    displayName: 'Department Container';
  };
  attributes: {
    departmentname: Schema.Attribute.String;
    employeecard: Schema.Attribute.Component<'shared.employee-card', true>;
  };
}

export interface SharedEmployeeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_employee_cards';
  info: {
    displayName: 'Employee Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    email: Schema.Attribute.String;
    employeeimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    employeename: Schema.Attribute.String;
  };
}

export interface SharedFeeDetailCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_fee_detail_cards';
  info: {
    displayName: 'Fee Detail Card';
  };
  attributes: {
    feecardimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    feecardtitle: Schema.Attribute.String;
    feepricedetails: Schema.Attribute.Component<'shared.fee-price', true>;
  };
}

export interface SharedFeePrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_fee_prices';
  info: {
    displayName: 'Fee Price';
  };
  attributes: {
    heading: Schema.Attribute.String;
    price: Schema.Attribute.String;
    refund: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'list item';
  };
  attributes: {
    listicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listlink: Schema.Attribute.String;
    listtext: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
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
      'aboutwhychooseus-component.why-choose-us': AboutwhychooseusComponentWhyChooseUs;
      'admissionpage-components.academic-excellence': AdmissionpageComponentsAcademicExcellence;
      'admissionpage-components.admissionprocesscomponent': AdmissionpageComponentsAdmissionprocesscomponent;
      'admissionpage-components.alumni': AdmissionpageComponentsAlumni;
      'admissionpage-components.fee-details': AdmissionpageComponentsFeeDetails;
      'admissionpage-components.location': AdmissionpageComponentsLocation;
      'admissionvisitus-component.academic': AdmissionvisitusComponentAcademic;
      'awards-recognition.awards-and-recognition': AwardsRecognitionAwardsAndRecognition;
      'homepage-components.a-decade-left-col': HomepageComponentsADecadeLeftCol;
      'homepage-components.a-decade-right-col': HomepageComponentsADecadeRightCol;
      'homepage-components.a-decade-section': HomepageComponentsADecadeSection;
      'homepage-components.afs-section': HomepageComponentsAfsSection;
      'homepage-components.elevate-campus': HomepageComponentsElevateCampus;
      'homepage-components.elevate-campus1': HomepageComponentsElevateCampus1;
      'homepage-components.elevatecampus2': HomepageComponentsElevatecampus2;
      'homepage-components.elevatecampus3': HomepageComponentsElevatecampus3;
      'homepage-components.fee-scholar': HomepageComponentsFeeScholar;
      'homepage-components.global-partener': HomepageComponentsGlobalPartener;
      'homepage-components.hero-section': HomepageComponentsHeroSection;
      'homepage-components.home-events-and-news': HomepageComponentsHomeEventsAndNews;
      'homepage-components.home-testimonials': HomepageComponentsHomeTestimonials;
      'homepage-components.our-top-recruiters': HomepageComponentsOurTopRecruiters;
      'homepage-components.shaping-future': HomepageComponentsShapingFuture;
      'homepage-components.visit-explore': HomepageComponentsVisitExplore;
      'homepage-components.whykrmu': HomepageComponentsWhykrmu;
      'homepage-components.yourjourney': HomepageComponentsYourjourney;
      'procard.procard': ProcardProcard;
      'shared.about-hero-banner': SharedAboutHeroBanner;
      'shared.achievements': SharedAchievements;
      'shared.breadcrumb': SharedBreadcrumb;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.card-with-image': SharedCardWithImage;
      'shared.card-with-image-link': SharedCardWithImageLink;
      'shared.cardwithoutimg': SharedCardwithoutimg;
      'shared.contact-info-card': SharedContactInfoCard;
      'shared.counter-component': SharedCounterComponent;
      'shared.department-container': SharedDepartmentContainer;
      'shared.employee-card': SharedEmployeeCard;
      'shared.fee-detail-card': SharedFeeDetailCard;
      'shared.fee-price': SharedFeePrice;
      'shared.list-item': SharedListItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
