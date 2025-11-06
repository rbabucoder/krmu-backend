import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutKrmuAboutKrmu extends Struct.SingleTypeSchema {
  collectionName: 'about_krmus';
  info: {
    displayName: 'About KRMU';
    pluralName: 'about-krmus';
    singularName: 'about-krmu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accrediation: Schema.Attribute.Component<
      'accrediation.accrediation',
      false
    >;
    careerprospects: Schema.Attribute.Component<
      'schoolprogramme.career-prospects',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dreamcareer: Schema.Attribute.Component<
      'schoolprogramme.dream-career',
      false
    >;
    halloffame: Schema.Attribute.Component<'halloffame.hall-of-fame', false>;
    internationcollaboration: Schema.Attribute.Component<
      'internationcollaboration.international-collboration',
      false
    >;
    krmucommittee: Schema.Attribute.Component<
      'krmucommittee.krmu-committee',
      false
    >;
    krmugroup: Schema.Attribute.Component<
      'krmu-group.kr-mangalam-group',
      false
    >;
    letsexplorecontent: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-krmu.about-krmu'
    > &
      Schema.Attribute.Private;
    ourlocation: Schema.Attribute.Component<
      'schoolprogramme.our-location',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    school_seo: Schema.Attribute.Component<'shared.seo', false>;
    subtitle: Schema.Attribute.Text;
    thenexgendescription: Schema.Attribute.Text;
    thenexgentitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'testing text'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    visionmission: Schema.Attribute.Component<
      'visionmission.vision-and-mission',
      false
    >;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    description: 'Write about yourself and the content you create';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Article: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descriptions: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccreditationsRecognitionAndApprovalAccreditationsRecognitionAndApproval
  extends Struct.SingleTypeSchema {
  collectionName: 'accreditations_recognition_and_approvals';
  info: {
    displayName: 'Accreditations, Recognition and Approval';
    pluralName: 'accreditations-recognition-and-approvals';
    singularName: 'accreditations-recognition-and-approval';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accrediationrecogapprovals: Schema.Attribute.Component<
      'shared.card-with-image-link',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accreditations-recognition-and-approval.accreditations-recognition-and-approval'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdmissionAdmission extends Struct.SingleTypeSchema {
  collectionName: 'admissions';
  info: {
    displayName: 'Admission';
    pluralName: 'admissions';
    singularName: 'admission';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    admissionherobanner: Schema.Attribute.Component<
      'shared.about-hero-banner',
      true
    >;
    AdmissionPageComponent: Schema.Attribute.DynamicZone<
      [
        'admissionpage-components.admissionprocesscomponent',
        'aboutwhychooseus-component.why-choose-us',
        'admissionpage-components.academic-excellence',
        'admissionpage-components.alumni',
        'admissionpage-components.fee-details',
        'admissionpage-components.location',
      ]
    >;
    admissionprocesscards: Schema.Attribute.Component<'shared.card', true>;
    awardsrecognition: Schema.Attribute.Component<'shared.card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    feedetailsinfos: Schema.Attribute.Component<'shared.fee-detail-card', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::admission.admission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdvisoryBoardAdvisoryBoard extends Struct.SingleTypeSchema {
  collectionName: 'advisory_boards';
  info: {
    displayName: 'Advisory Board';
    pluralName: 'advisory-boards';
    singularName: 'advisory-board';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advisoryboard: Schema.Attribute.Component<
      'shared.advisory-board-component',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::advisory-board.advisory-board'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdvisoryAdvisory extends Struct.CollectionTypeSchema {
  collectionName: 'advisories';
  info: {
    displayName: 'Advisory';
    pluralName: 'advisories';
    singularName: 'advisory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    department: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    empimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::advisory.advisory'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAlumniAlumni extends Struct.CollectionTypeSchema {
  collectionName: 'alumnis';
  info: {
    displayName: 'Alumni';
    pluralName: 'alumnis';
    singularName: 'alumni';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alumnicontent: Schema.Attribute.Text;
    alumnimedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designation: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::alumni.alumni'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: 'Create your blog content';
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: 'Create authors for your content';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'blog_categories';
  info: {
    displayName: 'Blog Category';
    pluralName: 'blog-categories';
    singularName: 'blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_category_slug: Schema.Attribute.UID<'blog_category_title'>;
    blog_category_title: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    single_blogs: Schema.Attribute.Relation<
      'manyToMany',
      'api::single-blog.single-blog'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.SingleTypeSchema {
  collectionName: 'blogs';
  info: {
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    enable_disable_form: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    npfFormClass: Schema.Attribute.Text;
    npfFormId: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: 'Organize your content into categories';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    article: Schema.Attribute.Relation<'manyToOne', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClubAndSocietyClubAndSociety
  extends Struct.SingleTypeSchema {
  collectionName: 'club_and_societies';
  info: {
    displayName: 'Club and Society';
    pluralName: 'club-and-societies';
    singularName: 'club-and-society';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    clubsaccordions: Schema.Attribute.Component<
      'club-societies.club-and-societies',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desc: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::club-and-society.club-and-society'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCodeOfConductCodeOfConduct extends Struct.SingleTypeSchema {
  collectionName: 'code_of_conducts';
  info: {
    displayName: 'Code of Conduct';
    pluralName: 'code-of-conducts';
    singularName: 'code-of-conduct';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breadcrumb: Schema.Attribute.Component<'shared.breadcrumb', false>;
    cocitems: Schema.Attribute.Component<'shared.list-item', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::code-of-conduct.code-of-conduct'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiControllerSettingControllerSetting
  extends Struct.SingleTypeSchema {
  collectionName: 'controller_settings';
  info: {
    displayName: 'Controller Setting';
    pluralName: 'controller-settings';
    singularName: 'controller-setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    download_prospectus_enable_disable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::controller-setting.controller-setting'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCustomPageCustomPage extends Struct.CollectionTypeSchema {
  collectionName: 'custom_pages';
  info: {
    displayName: 'Custom Page';
    pluralName: 'custom-pages';
    singularName: 'custom-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bodytags: Schema.Attribute.Component<'custom-page.body-content', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    csscustom: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    custom_css: Schema.Attribute.RichText;
    enable_disable_custom_page: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    headtag: Schema.Attribute.DynamicZone<['shared.meta-tag-field']>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::custom-page.custom-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'Title'>;
    Title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDeanHonorListDeanHonorList extends Struct.SingleTypeSchema {
  collectionName: 'dean_honor_lists';
  info: {
    displayName: 'Dean Honor List';
    pluralName: 'dean-honor-lists';
    singularName: 'dean-honor-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dean_honor_acc: Schema.Attribute.Component<
      'dean-honor.dean-honor-list-accordion',
      true
    >;
    herobg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dean-honor-list.dean-honor-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDegreeDegree extends Struct.CollectionTypeSchema {
  collectionName: 'degrees';
  info: {
    displayName: 'Degree';
    pluralName: 'degrees';
    singularName: 'degree';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::degree.degree'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventEvent extends Struct.CollectionTypeSchema {
  collectionName: 'events';
  info: {
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desc: Schema.Attribute.RichText;
    eventimages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::event.event'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    school_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::school-category.school-category'
    >;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExaminationExamination extends Struct.SingleTypeSchema {
  collectionName: 'examinations';
  info: {
    displayName: 'Examination';
    pluralName: 'examinations';
    singularName: 'examination';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    abc_nad_digilocker: Schema.Attribute.Component<
      'examination.abc-nad-digilocker',
      false
    >;
    apply_online: Schema.Attribute.Component<'examination.apply-online', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    examination_faq: Schema.Attribute.Component<
      'examination.examination-faq',
      false
    >;
    examination_hero: Schema.Attribute.Component<
      'examination.examination-hero',
      false
    >;
    imp_download: Schema.Attribute.Component<
      'examination.important-download',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::examination.examination'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFacilityFacility extends Struct.CollectionTypeSchema {
  collectionName: 'facilities';
  info: {
    displayName: 'Facility';
    pluralName: 'facilities';
    singularName: 'facility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badgetext: Schema.Attribute.String;
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::facility.facility'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFacultyFaculty extends Struct.CollectionTypeSchema {
  collectionName: 'faculties';
  info: {
    displayName: 'Faculty';
    pluralName: 'faculties';
    singularName: 'faculty';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faculty_card_desg: Schema.Attribute.String;
    faculty_designation: Schema.Attribute.String;
    faculty_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    faculty_interest_areas: Schema.Attribute.Component<
      'faculty.faculty-tab-content-container',
      true
    >;
    faculty_name: Schema.Attribute.String;
    faculty_qualification: Schema.Attribute.String;
    faculty_social_links: Schema.Attribute.Component<'shared.list-item', true>;
    faculty_tab_content: Schema.Attribute.Component<
      'faculty.faculty-tab-container',
      false
    >;
    faculty_type: Schema.Attribute.Enumeration<['Faculty', 'Advisory', 'Both']>;
    facultyslug: Schema.Attribute.UID<'faculty_name'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faculty.faculty'
    > &
      Schema.Attribute.Private;
    order_num: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    school_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::school-category.school-category'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqFaq extends Struct.SingleTypeSchema {
  collectionName: 'faqs';
  info: {
    displayName: 'FAQ';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    btn: Schema.Attribute.Component<'shared.common-button', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subheading: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinanceDepartmentFinanceDepartment
  extends Struct.SingleTypeSchema {
  collectionName: 'finance_departments';
  info: {
    displayName: 'Finance Department';
    pluralName: 'finance-departments';
    singularName: 'finance-department';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breadcrumb: Schema.Attribute.Component<'shared.breadcrumb', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    financeemployees: Schema.Attribute.Component<'shared.employee-card', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::finance-department.finance-department'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footer_comp_1: Schema.Attribute.Component<
      'footer-component.footer-component-1',
      false
    >;
    footer_comp_2: Schema.Attribute.Component<
      'footer-component.footer-column-1',
      false
    >;
    footer_comp_3: Schema.Attribute.Component<
      'footer-component.footer-component-3',
      false
    >;
    footer_comp_4: Schema.Attribute.Component<
      'footer-component.footer-component-4',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    defaultSeo: Schema.Attribute.Component<'shared.seo', false>;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    siteDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeaderMenuTempHeaderMenuTemp
  extends Struct.SingleTypeSchema {
  collectionName: 'header_menu_temps';
  info: {
    displayName: 'Header Menu Temp';
    pluralName: 'header-menu-temps';
    singularName: 'header-menu-temp';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    headermenus: Schema.Attribute.DynamicZone<
      [
        'temp-menus.academic-menu',
        'temp-menus.admissions',
        'temp-menus.placement-menu',
        'temp-menus.research-menu',
        'temp-menus.life-at-krmu',
        'temp-menus.about-us-menu',
        'menu.menu-links',
        'menu.menu-button',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::header-menu-temp.header-menu-temp'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    displayName: 'HomePage';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    PageContent: Schema.Attribute.DynamicZone<
      [
        'homepage-components.hero-section',
        'homepage-components.a-decade-section',
        'homepage-components.yourjourney',
        'homepage-components.afs-section',
        'homepage-components.our-top-recruiters',
        'homepage-components.fee-scholar',
        'homepage-components.whykrmu',
        'homepage-components.elevate-campus',
        'homepage-components.home-testimonials',
        'homepage-components.shaping-future',
        'homepage-components.global-partener',
        'homepage-components.visit-explore',
        'homepage-components.home-events-and-news',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    seofields: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiImageGalleryPageImageGalleryPage
  extends Struct.SingleTypeSchema {
  collectionName: 'image_gallery_pages';
  info: {
    displayName: 'Image Gallery Page';
    pluralName: 'image-gallery-pages';
    singularName: 'image-gallery-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::image-gallery-page.image-gallery-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIndustryConnectIndustryConnect
  extends Struct.SingleTypeSchema {
  collectionName: 'industry_connects';
  info: {
    displayName: 'Industry Connect';
    pluralName: 'industry-connects';
    singularName: 'industry-connect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cuisines: Schema.Attribute.Component<
      'industry-connect.japenese-cuisines',
      false
    >;
    deputy_commissioner: Schema.Attribute.Component<
      'industry-connect.deputy-commissioner',
      false
    >;
    description: Schema.Attribute.Text;
    expert_talk_role: Schema.Attribute.Component<
      'industry-connect.expert-talk-role',
      false
    >;
    idea_forge: Schema.Attribute.Component<
      'industry-connect.idea-forge',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::industry-connect.industry-connect'
    > &
      Schema.Attribute.Private;
    mural_event: Schema.Attribute.Component<
      'industry-connect.mural-event',
      false
    >;
    networking_opportunities: Schema.Attribute.Component<
      'industry-connect.networking-opportunities',
      false
    >;
    partnership_logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partnerships_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    seminar: Schema.Attribute.Component<'industry-connect.seminar', false>;
    shaping_career: Schema.Attribute.Component<
      'industry-connect.shaping-career',
      false
    >;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInternationalCollaborationInternationalCollaboration
  extends Struct.SingleTypeSchema {
  collectionName: 'international_collaborations';
  info: {
    displayName: 'International Collaboration';
    pluralName: 'international-collaborations';
    singularName: 'international-collaboration';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desc: Schema.Attribute.Text;
    int_collab_btn: Schema.Attribute.Component<'shared.button', false>;
    int_collab_full_width_card: Schema.Attribute.Component<
      'intcollab.internation-collaboration-full-width-card',
      true
    >;
    int_collab_hero_grid: Schema.Attribute.Component<
      'intcollab.international-collaboration',
      true
    >;
    intcollab_card: Schema.Attribute.Component<
      'intcollab.internation-collaboration-card',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::international-collaboration.international-collaboration'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Blocks;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMagazineReflectionMagazineReflection
  extends Struct.SingleTypeSchema {
  collectionName: 'magazine_reflections';
  info: {
    displayName: 'Magazine Reflection';
    pluralName: 'magazine-reflections';
    singularName: 'magazine-reflection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::magazine-reflection.magazine-reflection'
    > &
      Schema.Attribute.Private;
    magazinecard: Schema.Attribute.Component<'shared.magazine-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    reflectioncontent: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainMenuMainMenu extends Struct.SingleTypeSchema {
  collectionName: 'main_menus';
  info: {
    displayName: 'MainMenu';
    pluralName: 'main-menus';
    singularName: 'main-menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-menu.main-menu'
    > &
      Schema.Attribute.Private;
    MainMenuItems: Schema.Attribute.DynamicZone<
      ['menu.menu-button', 'menu.menu-links', 'menu.dropdown-menu']
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMembershipAndRankingMembershipAndRanking
  extends Struct.SingleTypeSchema {
  collectionName: 'membership_and_rankings';
  info: {
    displayName: 'Membership and Ranking';
    pluralName: 'membership-and-rankings';
    singularName: 'membership-and-ranking';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::membership-and-ranking.membership-and-ranking'
    > &
      Schema.Attribute.Private;
    memberships: Schema.Attribute.Component<
      'shared.card-with-image-link',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    rankings: Schema.Attribute.Component<'shared.card-with-image', true>;
    rankingtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMenuSectionMenuSection extends Struct.CollectionTypeSchema {
  collectionName: 'menu_sections';
  info: {
    displayName: 'Menu Section';
    pluralName: 'menu-sections';
    singularName: 'menu-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-section.menu-section'
    > &
      Schema.Attribute.Private;
    mainmenulinks: Schema.Attribute.Component<'menu.menu-links', true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsAndEventNewsAndEvent
  extends Struct.CollectionTypeSchema {
  collectionName: 'news_and_events';
  info: {
    displayName: 'News & Event';
    pluralName: 'news-and-events';
    singularName: 'news-and-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-and-event.news-and-event'
    > &
      Schema.Attribute.Private;
    newsmedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    school_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::school-category.school-category'
    >;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsEventNewsEvent extends Struct.SingleTypeSchema {
  collectionName: 'news_events';
  info: {
    displayName: 'News Event';
    pluralName: 'news-events';
    singularName: 'news-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-event.news-event'
    > &
      Schema.Attribute.Private;
    main_desc: Schema.Attribute.Blocks;
    main_heading: Schema.Attribute.Blocks;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNoticeNotice extends Struct.SingleTypeSchema {
  collectionName: 'notices';
  info: {
    displayName: 'Notice';
    pluralName: 'notices';
    singularName: 'notice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::notice.notice'
    > &
      Schema.Attribute.Private;
    noticepdfs: Schema.Attribute.Component<'notice-pdf.notice-pdf', true>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPedagogyPedagogy extends Struct.SingleTypeSchema {
  collectionName: 'pedagogies';
  info: {
    displayName: 'Pedagogy';
    pluralName: 'pedagogies';
    singularName: 'pedagogy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    classroom_teaching: Schema.Attribute.Component<
      'pedagogy.classroom-teaching',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    industry_connect: Schema.Attribute.Component<
      'pedagogy.peda-industry-connect',
      false
    >;
    innovative_work_lab: Schema.Attribute.Component<
      'pedagogy.peda-content-card',
      false
    >;
    lecture: Schema.Attribute.Component<'pedagogy.peda-content-card', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pedagogy.pedagogy'
    > &
      Schema.Attribute.Private;
    mentor_prog: Schema.Attribute.Component<
      'pedagogy.peda-content-card',
      false
    >;
    mock_interview: Schema.Attribute.Component<
      'pedagogy.peda-content-card',
      false
    >;
    pedagogy_hero: Schema.Attribute.Component<'pedagogy.pedagogy-hero', false>;
    practicals: Schema.Attribute.Component<'pedagogy.peda-content-card', false>;
    publishedAt: Schema.Attribute.DateTime;
    technology_enable_learning: Schema.Attribute.Component<
      'pedagogy.peda-content-card',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workshop_guest_lecture: Schema.Attribute.Component<
      'pedagogy.peda-content-card',
      false
    >;
  };
}

export interface ApiPhdSingleProgrammePhdSingleProgramme
  extends Struct.CollectionTypeSchema {
  collectionName: 'phd_single_programmes';
  info: {
    displayName: 'PHD Single Programme';
    pluralName: 'phd-single-programmes';
    singularName: 'phd-single-programme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    careeroptions: Schema.Attribute.Component<
      'phd-programme.career-options',
      false
    >;
    connectingtalent: Schema.Attribute.Component<
      'phd-programme.dream-career',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    criteria: Schema.Attribute.Component<'schoolprogramme.criteria', false>;
    degree: Schema.Attribute.Enumeration<['Doctoral Programme']>;
    duration: Schema.Attribute.Component<'shared.counter-component', false>;
    eligibility_criteria: Schema.Attribute.Component<
      'shared.counter-component',
      false
    >;
    fee_per_year: Schema.Attribute.Component<'shared.counter-component', false>;
    formfield: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::phd-single-programme.phd-single-programme'
    > &
      Schema.Attribute.Private;
    phdadmissionselect: Schema.Attribute.Component<
      'phd-programme.phd-admsission-and-selection-process',
      false
    >;
    phdfaqtitle: Schema.Attribute.Text;
    phdlogoslide: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    phdoutcome: Schema.Attribute.Component<'phd-programme.phd-outcome', false>;
    phdoverview: Schema.Attribute.Component<
      'phd-programme.phd-overview',
      false
    >;
    phdprogrammefaq: Schema.Attribute.Component<'phd-programme.phd-faq', true>;
    phdslug: Schema.Attribute.UID<'heading'>;
    programmehighlight: Schema.Attribute.Component<
      'phd-programme.phd-highlight',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    pursue: Schema.Attribute.Component<
      'phd-programme.who-should-pursue',
      false
    >;
    scholarsponsoredparttime: Schema.Attribute.Component<
      'phd-programme.scholar-sponsored-part-time',
      false
    >;
    school_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::school-category.school-category'
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhotoGalleryPhotoGallery
  extends Struct.CollectionTypeSchema {
  collectionName: 'photo_galleries';
  info: {
    displayName: 'Photo Gallery';
    pluralName: 'photo-galleries';
    singularName: 'photo-gallery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    gallery_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::photo-gallery.photo-gallery'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPlacementOverviewPlacementOverview
  extends Struct.SingleTypeSchema {
  collectionName: 'placement_overviews';
  info: {
    displayName: 'Placement Overview';
    pluralName: 'placement-overviews';
    singularName: 'placement-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::placement-overview.placement-overview'
    > &
      Schema.Attribute.Private;
    placementsoverviewcontainer: Schema.Attribute.DynamicZone<
      [
        'placement-overview.placement-hero',
        'placement-overview.placement-highlight',
        'placement-overview.placement-path',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPrintCoverageYearPrintCoverageYear
  extends Struct.CollectionTypeSchema {
  collectionName: 'print_coverage_years';
  info: {
    displayName: 'Print Coverage Year';
    pluralName: 'print-coverage-years';
    singularName: 'print-coverage-year';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::print-coverage-year.print-coverage-year'
    > &
      Schema.Attribute.Private;
    print_coverage: Schema.Attribute.Relation<
      'manyToOne',
      'api::print-coverage.print-coverage'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Years: Schema.Attribute.String;
  };
}

export interface ApiPrintCoveragePrintCoverage
  extends Struct.CollectionTypeSchema {
  collectionName: 'print_coverages';
  info: {
    displayName: 'Print Coverage';
    pluralName: 'print-coverages';
    singularName: 'print-coverage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desc: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::print-coverage.print-coverage'
    > &
      Schema.Attribute.Private;
    print_coverage_years: Schema.Attribute.Relation<
      'oneToMany',
      'api::print-coverage-year.print-coverage-year'
    >;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    upload_data: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ApiRegistrarOfficeRegistrarOffice
  extends Struct.SingleTypeSchema {
  collectionName: 'registrar_offices';
  info: {
    displayName: 'Registrar Office';
    pluralName: 'registrar-offices';
    singularName: 'registrar-office';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breadcrumb: Schema.Attribute.Component<'shared.breadcrumb', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    department: Schema.Attribute.Component<'shared.department-container', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::registrar-office.registrar-office'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    registrardescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    registrardesignation: Schema.Attribute.String;
    registraremail: Schema.Attribute.String;
    registrarimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    registrarinfo: Schema.Attribute.Text;
    registrarname: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSchoolCategorySchoolCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'school_categories';
  info: {
    displayName: 'School Category';
    pluralName: 'school-categories';
    singularName: 'school-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    faculties: Schema.Attribute.Relation<'manyToMany', 'api::faculty.faculty'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::school-category.school-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    news_and_events: Schema.Attribute.Relation<
      'manyToMany',
      'api::news-and-event.news-and-event'
    >;
    publishedAt: Schema.Attribute.DateTime;
    schools: Schema.Attribute.Relation<'oneToMany', 'api::school.school'>;
    slug: Schema.Attribute.UID<'name'>;
    student_achievements: Schema.Attribute.Relation<
      'manyToMany',
      'api::student-achievement.student-achievement'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSchoolProgrammeSchoolProgramme
  extends Struct.CollectionTypeSchema {
  collectionName: 'school_programmes';
  info: {
    displayName: 'School Programme';
    pluralName: 'school-programmes';
    singularName: 'school-programme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    admissionprocess: Schema.Attribute.Component<
      'schoolprogramme.admission-process',
      false
    >;
    beyondclassroom: Schema.Attribute.Component<
      'schoolprogramme.beyond-classroom',
      false
    >;
    career: Schema.Attribute.Component<
      'schoolprogramme.career-prospects',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    criteria: Schema.Attribute.Component<'schoolprogramme.criteria', false>;
    curriculum: Schema.Attribute.Component<'schoolprogramme.curriculum', false>;
    degree: Schema.Attribute.Relation<'oneToOne', 'api::degree.degree'>;
    dreamcareer: Schema.Attribute.Component<
      'schoolprogramme.dream-career',
      false
    >;
    financialassistance: Schema.Attribute.Component<
      'schoolprogramme.financial-assistance',
      false
    >;
    herosection: Schema.Attribute.Component<
      'schoolprogramme.hero-section',
      false
    >;
    highlightitle: Schema.Attribute.String;
    labsfacilities: Schema.Attribute.Component<
      'schoolprogramme.labs-and-facilities',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::school-programme.school-programme'
    > &
      Schema.Attribute.Private;
    order_num: Schema.Attribute.String;
    ourlocation: Schema.Attribute.Component<
      'schoolprogramme.our-location',
      false
    >;
    programmeeligibility: Schema.Attribute.Component<
      'schoolprogramme.eligibility-criteria',
      false
    >;
    programmehighlight: Schema.Attribute.Component<
      'schoolprogramme.programme-highlights',
      false
    >;
    programmescope: Schema.Attribute.Component<
      'schoolprogramme.programme-scope',
      false
    >;
    programmeslug: Schema.Attribute.UID<'title'>;
    publishedAt: Schema.Attribute.DateTime;
    school_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::school-category.school-category'
    >;
    SEO: Schema.Attribute.Component<'shared.seo', false>;
    specialisation: Schema.Attribute.Component<
      'schoolprogramme.specilisation',
      false
    >;
    title: Schema.Attribute.Text;
    toc: Schema.Attribute.Component<'schoolprogramme.table-of-content', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSchoolSchool extends Struct.CollectionTypeSchema {
  collectionName: 'schools';
  info: {
    displayName: 'School';
    pluralName: 'schools';
    singularName: 'school';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    admissionbtn: Schema.Attribute.Component<'shared.button', false>;
    admissionsessiontitle: Schema.Attribute.String;
    advantageCards: Schema.Attribute.Component<'shared.card', true>;
    advantagedesc: Schema.Attribute.Text;
    advantagesubtitle: Schema.Attribute.Text;
    advantagetitle: Schema.Attribute.String;
    advantagimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    alumnilogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    alumnititle: Schema.Attribute.String;
    coebtn1: Schema.Attribute.Component<'shared.button', false>;
    coebtn2: Schema.Attribute.Component<'shared.button', false>;
    coetitle1: Schema.Attribute.String;
    coetitle2: Schema.Attribute.String;
    collabcards: Schema.Attribute.Component<
      'schoolcomponent.industry-collaboration-card',
      true
    >;
    commence_journey: Schema.Attribute.Component<
      'schoolcomponent.commence-you-journey',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deancontent: Schema.Attribute.Blocks;
    deandesignation: Schema.Attribute.String;
    deanemail: Schema.Attribute.String;
    deanimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    deansname: Schema.Attribute.String;
    deanvisionsubtitle: Schema.Attribute.String;
    deanvisiontitle: Schema.Attribute.String;
    degree: Schema.Attribute.Relation<'oneToOne', 'api::degree.degree'>;
    eventsbtn: Schema.Attribute.Component<'shared.button', false>;
    eventsdesc: Schema.Attribute.Text;
    eventstitle: Schema.Attribute.String;
    excitedbg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    excitedbtns: Schema.Attribute.Component<'shared.button', true>;
    exciteddescription: Schema.Attribute.Text;
    excitedtitle: Schema.Attribute.String;
    fac_adv: Schema.Attribute.Component<
      'schoolcomponent.faculty-advisory',
      false
    >;
    facility_slide: Schema.Attribute.Component<
      'schoolcomponent.facility-slide',
      true
    >;
    fullwidthhero: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    herobutton: Schema.Attribute.Component<'shared.button', true>;
    iframe: Schema.Attribute.Text;
    induscollabtitle: Schema.Attribute.Blocks;
    knowledgepartenerlogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    knowledgetitle: Schema.Attribute.String;
    letsexplorecontent: Schema.Attribute.Blocks;
    listitem1: Schema.Attribute.Component<
      'schoolcomponent.school-list-item',
      false
    >;
    listitem2: Schema.Attribute.Component<
      'schoolcomponent.school-list-item',
      false
    >;
    listitem3: Schema.Attribute.Component<
      'schoolcomponent.school-list-item',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::school.school'
    > &
      Schema.Attribute.Private;
    newsletterbg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    newsletterbtns: Schema.Attribute.Component<'shared.button', true>;
    newsletterdesc: Schema.Attribute.Text;
    newslettertitle: Schema.Attribute.String;
    programme_offered: Schema.Attribute.Component<
      'schoolcomponent.programme-offered',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    school_advantage: Schema.Attribute.Component<
      'schoolcomponent.advantage-content',
      false
    >;
    school_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::school-category.school-category'
    >;
    school_seo: Schema.Attribute.Component<'shared.seo', false>;
    schoolcomps: Schema.Attribute.DynamicZone<['schoolcomponent.knowledge']>;
    schoolherobanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    schoolname: Schema.Attribute.String;
    showdeaninfo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    studentachievementsbtn: Schema.Attribute.Component<'shared.button', false>;
    studentachievementtitle: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    testimonialdesc: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<
      'schoolcomponent.school-testimonial-card',
      true
    >;
    tetimonialtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    urlslug: Schema.Attribute.UID<'schoolname'>;
    video_comp: Schema.Attribute.Component<
      'schoolcomponent.industry-video',
      false
    >;
    videoformat: Schema.Attribute.Enumeration<['Iframe', 'videourl']> &
      Schema.Attribute.DefaultTo<'Iframe'>;
    videolink: Schema.Attribute.String;
  };
}

export interface ApiSectionSection extends Struct.CollectionTypeSchema {
  collectionName: 'sections';
  info: {
    displayName: 'Section';
    pluralName: 'sections';
    singularName: 'section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section.section'
    > &
      Schema.Attribute.Private;
    navimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSingleBlogSingleBlog extends Struct.CollectionTypeSchema {
  collectionName: 'single_blogs';
  info: {
    displayName: 'Single Blog';
    pluralName: 'single-blogs';
    singularName: 'single-blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::blog-category.blog-category'
    >;
    blog_slug: Schema.Attribute.UID<'title'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-blog.single-blog'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    single_blog: Schema.Attribute.DynamicZone<['blog.single-blog-component']>;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStudentAchievementStudentAchievement
  extends Struct.CollectionTypeSchema {
  collectionName: 'student_achievements';
  info: {
    displayName: 'Student Achievement';
    pluralName: 'student-achievements';
    singularName: 'student-achievement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    achievement_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    achivementimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::student-achievement.student-achievement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    school_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::school-category.school-category'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    profiledesignation: Schema.Attribute.String;
    profileinfo: Schema.Attribute.Text;
    profilename: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTopbarMenuTopbarMenu extends Struct.SingleTypeSchema {
  collectionName: 'topbar_menus';
  info: {
    displayName: 'Topbar Menu';
    pluralName: 'topbar-menus';
    singularName: 'topbar-menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::topbar-menu.topbar-menu'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopbarMenuItems: Schema.Attribute.DynamicZone<
      ['menu.menu-button', 'menu.menu-links']
    >;
    topbarsociallinks: Schema.Attribute.Component<
      'menu.menu-social-links',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVideoGalleryVideoGallery extends Struct.SingleTypeSchema {
  collectionName: 'video_galleries';
  info: {
    displayName: 'Video Gallery';
    pluralName: 'video-galleries';
    singularName: 'video-gallery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::video-gallery.video-gallery'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Component<'shared.video-card', true>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-krmu.about-krmu': ApiAboutKrmuAboutKrmu;
      'api::about.about': ApiAboutAbout;
      'api::accreditations-recognition-and-approval.accreditations-recognition-and-approval': ApiAccreditationsRecognitionAndApprovalAccreditationsRecognitionAndApproval;
      'api::admission.admission': ApiAdmissionAdmission;
      'api::advisory-board.advisory-board': ApiAdvisoryBoardAdvisoryBoard;
      'api::advisory.advisory': ApiAdvisoryAdvisory;
      'api::alumni.alumni': ApiAlumniAlumni;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog.blog': ApiBlogBlog;
      'api::category.category': ApiCategoryCategory;
      'api::club-and-society.club-and-society': ApiClubAndSocietyClubAndSociety;
      'api::code-of-conduct.code-of-conduct': ApiCodeOfConductCodeOfConduct;
      'api::controller-setting.controller-setting': ApiControllerSettingControllerSetting;
      'api::custom-page.custom-page': ApiCustomPageCustomPage;
      'api::dean-honor-list.dean-honor-list': ApiDeanHonorListDeanHonorList;
      'api::degree.degree': ApiDegreeDegree;
      'api::event.event': ApiEventEvent;
      'api::examination.examination': ApiExaminationExamination;
      'api::facility.facility': ApiFacilityFacility;
      'api::faculty.faculty': ApiFacultyFaculty;
      'api::faq.faq': ApiFaqFaq;
      'api::finance-department.finance-department': ApiFinanceDepartmentFinanceDepartment;
      'api::footer.footer': ApiFooterFooter;
      'api::global.global': ApiGlobalGlobal;
      'api::header-menu-temp.header-menu-temp': ApiHeaderMenuTempHeaderMenuTemp;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::image-gallery-page.image-gallery-page': ApiImageGalleryPageImageGalleryPage;
      'api::industry-connect.industry-connect': ApiIndustryConnectIndustryConnect;
      'api::international-collaboration.international-collaboration': ApiInternationalCollaborationInternationalCollaboration;
      'api::magazine-reflection.magazine-reflection': ApiMagazineReflectionMagazineReflection;
      'api::main-menu.main-menu': ApiMainMenuMainMenu;
      'api::membership-and-ranking.membership-and-ranking': ApiMembershipAndRankingMembershipAndRanking;
      'api::menu-section.menu-section': ApiMenuSectionMenuSection;
      'api::news-and-event.news-and-event': ApiNewsAndEventNewsAndEvent;
      'api::news-event.news-event': ApiNewsEventNewsEvent;
      'api::notice.notice': ApiNoticeNotice;
      'api::pedagogy.pedagogy': ApiPedagogyPedagogy;
      'api::phd-single-programme.phd-single-programme': ApiPhdSingleProgrammePhdSingleProgramme;
      'api::photo-gallery.photo-gallery': ApiPhotoGalleryPhotoGallery;
      'api::placement-overview.placement-overview': ApiPlacementOverviewPlacementOverview;
      'api::print-coverage-year.print-coverage-year': ApiPrintCoverageYearPrintCoverageYear;
      'api::print-coverage.print-coverage': ApiPrintCoveragePrintCoverage;
      'api::registrar-office.registrar-office': ApiRegistrarOfficeRegistrarOffice;
      'api::school-category.school-category': ApiSchoolCategorySchoolCategory;
      'api::school-programme.school-programme': ApiSchoolProgrammeSchoolProgramme;
      'api::school.school': ApiSchoolSchool;
      'api::section.section': ApiSectionSection;
      'api::single-blog.single-blog': ApiSingleBlogSingleBlog;
      'api::student-achievement.student-achievement': ApiStudentAchievementStudentAchievement;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::topbar-menu.topbar-menu': ApiTopbarMenuTopbarMenu;
      'api::video-gallery.video-gallery': ApiVideoGalleryVideoGallery;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
