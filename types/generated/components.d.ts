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

export interface AccrediationAccrediation extends Struct.ComponentSchema {
  collectionName: 'components_accrediation_accrediations';
  info: {
    displayName: 'Accrediation';
    icon: 'command';
  };
  attributes: {
    accrediationlogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
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

export interface HalloffameHallOfFame extends Struct.ComponentSchema {
  collectionName: 'components_halloffame_hall_of_fames';
  info: {
    displayName: 'Hall of Fame';
  };
  attributes: {
    hallfame: Schema.Attribute.Component<'shared.cardwithoutimg', true>;
    title: Schema.Attribute.String;
  };
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
    globalpartnerimages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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
    newsandeventbtn: Schema.Attribute.Component<'shared.button', false>;
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
    mobileshapingimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
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

export interface InternationcollaborationInternationalCollboration
  extends Struct.ComponentSchema {
  collectionName: 'components_internationcollaboration_international_collborations';
  info: {
    displayName: 'International Collboration';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    intcollabbtn: Schema.Attribute.Component<'shared.button', false>;
    internationcollablogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface KrmuGroupKrMangalamGroup extends Struct.ComponentSchema {
  collectionName: 'components_krmu_group_kr_mangalam_groups';
  info: {
    displayName: 'KR Mangalam Group';
  };
  attributes: {
    description: Schema.Attribute.Text;
    krmbranch: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface KrmucommitteeKrmuCommittee extends Struct.ComponentSchema {
  collectionName: 'components_krmucommittee_krmu_committees';
  info: {
    displayName: 'KRMU Committee';
  };
  attributes: {
    committeebtn: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface MenuDropdownMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdown_menus';
  info: {
    displayName: 'DropdownMenu';
  };
  attributes: {
    imgpos: Schema.Attribute.Enumeration<['rightimg', 'leftimg']> &
      Schema.Attribute.DefaultTo<'rightimg'>;
    menu_sections: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-section.menu-section'
    >;
    menuimg: Schema.Attribute.Component<'menu.menumediacomp', false>;
    title: Schema.Attribute.String;
  };
}

export interface MenuMenuButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'Menu Button';
    icon: 'cursor';
  };
  attributes: {
    class: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLinks';
    icon: 'link';
  };
  attributes: {
    menuclass: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_social_links';
  info: {
    displayName: 'Menu Social Links';
    icon: 'attachment';
  };
  attributes: {
    socialicon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenumediacomp extends Struct.ComponentSchema {
  collectionName: 'components_menu_menumediacomps';
  info: {
    displayName: 'menumediacomp';
    icon: 'dashboard';
  };
  attributes: {
    counter: Schema.Attribute.Component<'shared.counter-component', true>;
    menuimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PlacementOverviewPlacementHero extends Struct.ComponentSchema {
  collectionName: 'components_placement_overview_placement_heroes';
  info: {
    displayName: 'Placement Hero';
  };
  attributes: {
    overviewcounter: Schema.Attribute.Component<
      'shared.counter-with-class',
      true
    >;
    overviewvideo: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PlacementOverviewPlacementHighlight
  extends Struct.ComponentSchema {
  collectionName: 'components_placement_overview_placement_highlights';
  info: {
    displayName: 'Placement Highlight';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlightbtn: Schema.Attribute.Component<'shared.button', false>;
    placementhighlights: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PlacementOverviewPlacementPath extends Struct.ComponentSchema {
  collectionName: 'components_placement_overview_placement_paths';
  info: {
    displayName: 'Placement Path';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    desc: Schema.Attribute.Text;
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

export interface SchoolcomponentAdmissionOpen extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_admission_opens';
  info: {
    displayName: 'Admission Open';
  };
  attributes: {
    applynowbtn: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SchoolcomponentEventsandexperiencecard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_eventsandexperiencecards';
  info: {
    displayName: 'eventsandexperiencecard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SchoolcomponentIndustryCollaborationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_industry_collaboration_cards';
  info: {
    displayName: 'Industry Collaboration Card';
    icon: 'apps';
  };
  attributes: {
    cardcontent: Schema.Attribute.Blocks;
    cardimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolcomponentKnowledge extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_knowledges';
  info: {
    displayName: 'Knowledge';
  };
  attributes: {
    counter: Schema.Attribute.Component<'shared.counter-component', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SchoolcomponentSchoolComponent extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_school_components';
  info: {
    displayName: 'School Component';
  };
  attributes: {
    schools: Schema.Attribute.Relation<'oneToMany', 'api::school.school'>;
  };
}

export interface SchoolcomponentSchoolListItem extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_school_list_items';
  info: {
    displayName: 'School List item';
  };
  attributes: {
    listheading: Schema.Attribute.String;
    listsitems: Schema.Attribute.Component<'shared.list-item', true>;
  };
}

export interface SchoolcomponentSchoolTestimonialCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolcomponent_school_testimonial_cards';
  info: {
    displayName: 'School Testimonial Card';
  };
  attributes: {
    education: Schema.Attribute.String;
    info: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    userimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolprogrammeAdmissionProcess
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_admission_processes';
  info: {
    displayName: 'Admission Process';
    icon: 'store';
  };
  attributes: {
    admissionbtn: Schema.Attribute.Component<'shared.button', false>;
    admissionprocesscard: Schema.Attribute.Component<
      'schoolprogramme.admission-process-card',
      true
    >;
    description: Schema.Attribute.String;
    desktopadmissionprocessimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeAdmissionProcessCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_admission_process_cards';
  info: {
    displayName: 'Admission Process Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    link: Schema.Attribute.String;
    mobcounting: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeBeyondClassroom extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_beyond_classrooms';
  info: {
    displayName: 'Beyond Classroom';
  };
  attributes: {
    beyondclassroomimages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeCareerProspects extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_career_prospects';
  info: {
    displayName: 'Career Prospects';
  };
  attributes: {
    careerbtn: Schema.Attribute.Component<'shared.button', false>;
    careercards: Schema.Attribute.Component<
      'schoolprogramme.career-prospects-card',
      true
    >;
    careerimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeCareerProspectsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_career_prospects_cards';
  info: {
    displayName: 'Career Prospects Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    num: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_curricula';
  info: {
    displayName: 'Curriculum';
  };
  attributes: {
    currbtn: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    years: Schema.Attribute.Component<
      'schoolprogramme.programme-structure',
      true
    >;
  };
}

export interface SchoolprogrammeDreamCareer extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_dream_careers';
  info: {
    displayName: 'Dream Career';
  };
  attributes: {
    campusrecruitersnum: Schema.Attribute.String;
    campusrecruitertitle: Schema.Attribute.String;
    careerlogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    highestpackagenum: Schema.Attribute.String;
    highestpackagetitle: Schema.Attribute.String;
    placementassistnum: Schema.Attribute.String;
    placementassisttitle: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeDreamCareerCard extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_dream_career_cards';
  info: {
    displayName: 'Dream Career Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeEligibilityCriteria
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_eligibility_criteria';
  info: {
    displayName: 'Eligibility Criteria';
    icon: 'command';
  };
  attributes: {
    elgibility: Schema.Attribute.Component<
      'schoolprogramme.programme-eligibility',
      true
    >;
    mobherobtn: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SchoolprogrammeFinancialAssistance
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_financial_assistances';
  info: {
    displayName: 'Financial Assistance';
  };
  attributes: {
    description: Schema.Attribute.Text;
    financelogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    point1: Schema.Attribute.String;
    point2: Schema.Attribute.String;
    point3: Schema.Attribute.String;
    point4: Schema.Attribute.String;
    point5: Schema.Attribute.String;
    point6: Schema.Attribute.String;
    point7: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    herobtn: Schema.Attribute.Component<'shared.button', false>;
    heroimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeLabsAndFacilities
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_labs_and_facilities';
  info: {
    displayName: 'Labs & Facilities';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    labbtn: Schema.Attribute.Component<'shared.button', false>;
    labcards: Schema.Attribute.Component<
      'schoolprogramme.labs-facilities-card',
      true
    >;
    labscontent: Schema.Attribute.Blocks;
    labsimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolprogrammeLabsFacilitiesCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_labs_facilities_cards';
  info: {
    displayName: 'LabsFacilities Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeOurLocation extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_our_locations';
  info: {
    displayName: 'Our Location';
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolprogrammeProgrammeEligibility
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_eligibilities';
  info: {
    displayName: 'Programme Eligibility';
    icon: 'filter';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeProgrammeHighlightCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_highlight_cards';
  info: {
    displayName: 'Programme Highlight Card';
    icon: 'crop';
  };
  attributes: {
    highlightimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeProgrammeHighlights
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_highlights';
  info: {
    displayName: 'Programme Highlights';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    programmehighlightcards: Schema.Attribute.Component<
      'schoolprogramme.programme-highlight-card',
      true
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeProgrammeScope extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_scopes';
  info: {
    displayName: 'Programme Scope';
    icon: 'cog';
  };
  attributes: {
    scopebtn: Schema.Attribute.Component<'shared.button', false>;
    scopecontent: Schema.Attribute.Text;
    scopeheading: Schema.Attribute.String;
    scopeimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolprogrammeProgrammeSpecialisationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_specialisation_cards';
  info: {
    displayName: 'Programme Specialisation Card';
  };
  attributes: {
    link: Schema.Attribute.String;
    specialisationimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SchoolprogrammeProgrammeStructure
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_structures';
  info: {
    displayName: 'Programme Structure';
  };
  attributes: {
    semester: Schema.Attribute.Component<'schoolprogramme.semester', true>;
    year: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeProgrammeSubjects
  extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_programme_subjects';
  info: {
    displayName: 'Programme Subjects';
  };
  attributes: {
    subjectname: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeQuesAns extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_ques_ans';
  info: {
    displayName: 'Ques Ans';
  };
  attributes: {
    ans: Schema.Attribute.Text;
    ques: Schema.Attribute.String;
  };
}

export interface SchoolprogrammeSemester extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_semesters';
  info: {
    displayName: 'Semester';
  };
  attributes: {
    pdfbtns: Schema.Attribute.Component<'shared.button', true>;
    semestername: Schema.Attribute.String;
    subjects: Schema.Attribute.Component<
      'schoolprogramme.programme-subjects',
      true
    >;
  };
}

export interface SchoolprogrammeSpecilisation extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_specilisations';
  info: {
    displayName: 'Specilisation';
    icon: 'arrowRight';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    specialisationcards: Schema.Attribute.Component<
      'schoolprogramme.programme-specialisation-card',
      true
    >;
    specialisationimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SchoolprogrammeTableOfContent extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_table_of_contents';
  info: {
    displayName: 'Table Of Content';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    highlightheading: Schema.Attribute.String;
    tocbtn: Schema.Attribute.Component<'shared.button', false>;
    tocfaq: Schema.Attribute.Component<'schoolprogramme.tocfaq', true>;
    tocimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SchoolprogrammeTocfaq extends Struct.ComponentSchema {
  collectionName: 'components_schoolprogramme_tocfaqs';
  info: {
    displayName: 'tocfaq';
  };
  attributes: {
    faq: Schema.Attribute.Component<'schoolprogramme.ques-ans', true>;
    tocpoint: Schema.Attribute.String;
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

export interface SharedAdvisoryBoardComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_advisory_board_components';
  info: {
    displayName: 'Advisory Board Component';
  };
  attributes: {
    advisoryboardinfo: Schema.Attribute.Blocks;
    advisoryimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
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
    buttonlink: Schema.Attribute.Text;
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
    description: Schema.Attribute.Text;
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

export interface SharedCounterWithClass extends Struct.ComponentSchema {
  collectionName: 'components_shared_counter_with_classes';
  info: {
    displayName: 'Counter With Class';
  };
  attributes: {
    classname: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedEmployeeCard2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_employee_card_2s';
  info: {
    displayName: 'Employee Card 2';
  };
  attributes: {
    department: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    empimg: Schema.Attribute.String;
    name: Schema.Attribute.String;
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
    canonical: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSingleMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_medias';
  info: {
    displayName: 'Single Media';
  };
  attributes: {
    singlemedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface SharedTestingComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_testing_components';
  info: {
    displayName: 'Testing component';
  };
  attributes: {
    working: Schema.Attribute.String;
  };
}

export interface TempMenusAboutUsMenu extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_about_us_menus';
  info: {
    displayName: 'About Us Menu';
  };
  attributes: {
    aboutuscounter: Schema.Attribute.Component<
      'shared.counter-component',
      true
    >;
    administration: Schema.Attribute.Component<
      'temp-menus.tempmenuslinks',
      false
    >;
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    overview: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    title: Schema.Attribute.String;
  };
}

export interface TempMenusAcademicMenu extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_academic_menus';
  info: {
    displayName: 'Academic Menu';
    icon: 'command';
  };
  attributes: {
    acadcounter: Schema.Attribute.Component<'shared.counter-component', true>;
    academicmenu: Schema.Attribute.Component<
      'temp-menus.tempmenuslinks',
      false
    >;
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    discovermenu: Schema.Attribute.Component<
      'temp-menus.tempmenuslinks',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface TempMenusAdmissions extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_admissions';
  info: {
    displayName: 'Admissions Menu';
    icon: 'connector';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundimagetext: Schema.Attribute.String;
    enrollnow: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    scholarships: Schema.Attribute.Component<
      'temp-menus.tempmenuslinks',
      false
    >;
    title: Schema.Attribute.String;
    visitus: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
  };
}

export interface TempMenusLifeAtKrmu extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_life_at_krmus';
  info: {
    displayName: 'Life at KRMU';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundimagetext: Schema.Attribute.String;
    lfeatkrmu2: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    lifeatkrmu1: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    title: Schema.Attribute.String;
  };
}

export interface TempMenusPlacementMenu extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_placement_menus';
  info: {
    displayName: 'Placement Menu';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    placement: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    placementcounter: Schema.Attribute.Component<
      'shared.counter-component',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TempMenusResearchMenu extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_research_menus';
  info: {
    displayName: 'Research Menu';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    research: Schema.Attribute.Component<'temp-menus.tempmenuslinks', false>;
    researchcounter: Schema.Attribute.Component<
      'shared.counter-component',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TempMenusTempmenuslinks extends Struct.ComponentSchema {
  collectionName: 'components_temp_menus_tempmenuslinks';
  info: {
    displayName: 'tempmenuslinks';
  };
  attributes: {
    heading: Schema.Attribute.String;
    menulinks: Schema.Attribute.Component<'menu.menu-links', true>;
  };
}

export interface VisionmissionVisionAndMission extends Struct.ComponentSchema {
  collectionName: 'components_visionmission_vision_and_missions';
  info: {
    displayName: 'Vision and Mission';
  };
  attributes: {
    missiondescription: Schema.Attribute.Blocks;
    missiontitle: Schema.Attribute.String;
    visiondescription: Schema.Attribute.Blocks;
    visiontitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutwhychooseus-component.why-choose-us': AboutwhychooseusComponentWhyChooseUs;
      'accrediation.accrediation': AccrediationAccrediation;
      'admissionpage-components.academic-excellence': AdmissionpageComponentsAcademicExcellence;
      'admissionpage-components.admissionprocesscomponent': AdmissionpageComponentsAdmissionprocesscomponent;
      'admissionpage-components.alumni': AdmissionpageComponentsAlumni;
      'admissionpage-components.fee-details': AdmissionpageComponentsFeeDetails;
      'admissionpage-components.location': AdmissionpageComponentsLocation;
      'admissionvisitus-component.academic': AdmissionvisitusComponentAcademic;
      'awards-recognition.awards-and-recognition': AwardsRecognitionAwardsAndRecognition;
      'halloffame.hall-of-fame': HalloffameHallOfFame;
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
      'internationcollaboration.international-collboration': InternationcollaborationInternationalCollboration;
      'krmu-group.kr-mangalam-group': KrmuGroupKrMangalamGroup;
      'krmucommittee.krmu-committee': KrmucommitteeKrmuCommittee;
      'menu.dropdown-menu': MenuDropdownMenu;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-links': MenuMenuLinks;
      'menu.menu-social-links': MenuMenuSocialLinks;
      'menu.menumediacomp': MenuMenumediacomp;
      'placement-overview.placement-hero': PlacementOverviewPlacementHero;
      'placement-overview.placement-highlight': PlacementOverviewPlacementHighlight;
      'placement-overview.placement-path': PlacementOverviewPlacementPath;
      'procard.procard': ProcardProcard;
      'schoolcomponent.admission-open': SchoolcomponentAdmissionOpen;
      'schoolcomponent.eventsandexperiencecard': SchoolcomponentEventsandexperiencecard;
      'schoolcomponent.industry-collaboration-card': SchoolcomponentIndustryCollaborationCard;
      'schoolcomponent.knowledge': SchoolcomponentKnowledge;
      'schoolcomponent.school-component': SchoolcomponentSchoolComponent;
      'schoolcomponent.school-list-item': SchoolcomponentSchoolListItem;
      'schoolcomponent.school-testimonial-card': SchoolcomponentSchoolTestimonialCard;
      'schoolprogramme.admission-process': SchoolprogrammeAdmissionProcess;
      'schoolprogramme.admission-process-card': SchoolprogrammeAdmissionProcessCard;
      'schoolprogramme.beyond-classroom': SchoolprogrammeBeyondClassroom;
      'schoolprogramme.career-prospects': SchoolprogrammeCareerProspects;
      'schoolprogramme.career-prospects-card': SchoolprogrammeCareerProspectsCard;
      'schoolprogramme.curriculum': SchoolprogrammeCurriculum;
      'schoolprogramme.dream-career': SchoolprogrammeDreamCareer;
      'schoolprogramme.dream-career-card': SchoolprogrammeDreamCareerCard;
      'schoolprogramme.eligibility-criteria': SchoolprogrammeEligibilityCriteria;
      'schoolprogramme.financial-assistance': SchoolprogrammeFinancialAssistance;
      'schoolprogramme.hero-section': SchoolprogrammeHeroSection;
      'schoolprogramme.labs-and-facilities': SchoolprogrammeLabsAndFacilities;
      'schoolprogramme.labs-facilities-card': SchoolprogrammeLabsFacilitiesCard;
      'schoolprogramme.our-location': SchoolprogrammeOurLocation;
      'schoolprogramme.programme-eligibility': SchoolprogrammeProgrammeEligibility;
      'schoolprogramme.programme-highlight-card': SchoolprogrammeProgrammeHighlightCard;
      'schoolprogramme.programme-highlights': SchoolprogrammeProgrammeHighlights;
      'schoolprogramme.programme-scope': SchoolprogrammeProgrammeScope;
      'schoolprogramme.programme-specialisation-card': SchoolprogrammeProgrammeSpecialisationCard;
      'schoolprogramme.programme-structure': SchoolprogrammeProgrammeStructure;
      'schoolprogramme.programme-subjects': SchoolprogrammeProgrammeSubjects;
      'schoolprogramme.ques-ans': SchoolprogrammeQuesAns;
      'schoolprogramme.semester': SchoolprogrammeSemester;
      'schoolprogramme.specilisation': SchoolprogrammeSpecilisation;
      'schoolprogramme.table-of-content': SchoolprogrammeTableOfContent;
      'schoolprogramme.tocfaq': SchoolprogrammeTocfaq;
      'shared.about-hero-banner': SharedAboutHeroBanner;
      'shared.achievements': SharedAchievements;
      'shared.advisory-board-component': SharedAdvisoryBoardComponent;
      'shared.breadcrumb': SharedBreadcrumb;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.card-with-image': SharedCardWithImage;
      'shared.card-with-image-link': SharedCardWithImageLink;
      'shared.cardwithoutimg': SharedCardwithoutimg;
      'shared.contact-info-card': SharedContactInfoCard;
      'shared.counter-component': SharedCounterComponent;
      'shared.counter-with-class': SharedCounterWithClass;
      'shared.department-container': SharedDepartmentContainer;
      'shared.employee-card': SharedEmployeeCard;
      'shared.employee-card-2': SharedEmployeeCard2;
      'shared.fee-detail-card': SharedFeeDetailCard;
      'shared.fee-price': SharedFeePrice;
      'shared.list-item': SharedListItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.single-media': SharedSingleMedia;
      'shared.slider': SharedSlider;
      'shared.testing-component': SharedTestingComponent;
      'temp-menus.about-us-menu': TempMenusAboutUsMenu;
      'temp-menus.academic-menu': TempMenusAcademicMenu;
      'temp-menus.admissions': TempMenusAdmissions;
      'temp-menus.life-at-krmu': TempMenusLifeAtKrmu;
      'temp-menus.placement-menu': TempMenusPlacementMenu;
      'temp-menus.research-menu': TempMenusResearchMenu;
      'temp-menus.tempmenuslinks': TempMenusTempmenuslinks;
      'visionmission.vision-and-mission': VisionmissionVisionAndMission;
    }
  }
}
