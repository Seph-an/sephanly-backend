import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCandidateCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_candidate_ctas';
  info: {
    displayName: 'CandidateCTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    description: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCandidateProofs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_candidate_proofs';
  info: {
    description: '';
    displayName: 'CandidateProofs';
  };
  attributes: {
    ProofParagraph: Schema.Attribute.Component<
      'elements.proof-paragraph',
      false
    >;
    Proofs: Schema.Attribute.Component<'elements.proofs', false>;
  };
}

export interface BlocksCandidateTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_candidate_testimonials';
  info: {
    displayName: 'CandidateTestimonials';
  };
  attributes: {
    CandidateTestimonys: Schema.Attribute.Component<
      'elements.canditate-testimonys',
      false
    >;
    description: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCandidateWhy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_candidate_whies';
  info: {
    description: '';
    displayName: 'CandidateWhy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    Propositions: Schema.Attribute.Component<'elements.propositions', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'faqs';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    faqsContainer: Schema.Attribute.Component<'elements.faqs-container', false>;
    hook: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    subheading: Schema.Attribute.Text;
  };
}

export interface BlocksHrCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hr_ctas';
  info: {
    displayName: 'HR-CTA';
  };
  attributes: {
    CTAimg: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    descriptionHighlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHrHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hr_heroes';
  info: {
    displayName: 'HR-Hero';
  };
  attributes: {
    identification: Schema.Attribute.String;
    serviceImg: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    subtitleHighlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface BlocksHrProcess extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hr_processes';
  info: {
    displayName: 'HR-Process';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionHighlight: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    Processes: Schema.Attribute.Component<'elements.processes', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHrTypes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hr_types';
  info: {
    displayName: 'HR-Types';
  };
  attributes: {
    identification: Schema.Attribute.String;
    title: Schema.Attribute.String;
    types: Schema.Attribute.Component<'elements.processes', false>;
  };
}

export interface BlocksMissionvision extends Struct.ComponentSchema {
  collectionName: 'components_blocks_missionvisions';
  info: {
    description: '';
    displayName: 'missionvision';
  };
  attributes: {
    description: Schema.Attribute.Text;
    mission: Schema.Attribute.Component<'elements.card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    vision: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    PricingCard: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    identification: Schema.Attribute.String;
    ServiceItems: Schema.Attribute.Component<'elements.service-items', false>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSubscribeFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribe_footers';
  info: {
    displayName: 'SubscribeFooter';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    hook: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    Testimonys: Schema.Attribute.Component<'elements.testimonys', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksValues extends Struct.ComponentSchema {
  collectionName: 'components_blocks_values';
  info: {
    description: '';
    displayName: 'Values';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    valuescontainer: Schema.Attribute.Component<
      'elements.values-container',
      false
    >;
  };
}

export interface BlocksWhy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_whies';
  info: {
    description: '';
    displayName: 'Why';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    clientLogos: Schema.Attribute.Component<
      'elements.trusted-clients-logos',
      false
    >;
    experienceTrusted: Schema.Attribute.String;
    hook: Schema.Attribute.Text;
    identification: Schema.Attribute.String;
    proficiencyProofs: Schema.Attribute.Component<
      'elements.proficiency-proofs',
      false
    >;
    qualifiedProfecientProfessionals: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    theNumbers: Schema.Attribute.Component<'elements.the-numbers', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    types: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCandidateTestimony extends Struct.ComponentSchema {
  collectionName: 'components_elements_candidate_testimonies';
  info: {
    displayName: 'CandidateTestimony';
  };
  attributes: {
    author: Schema.Attribute.String;
    service: Schema.Attribute.Enumeration<['cv', 'linkedin', 'interview']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cv'>;
    testimony: Schema.Attribute.Text;
  };
}

export interface ElementsCanditateTestimonys extends Struct.ComponentSchema {
  collectionName: 'components_elements_canditate_testimonys';
  info: {
    displayName: 'CanditateTestimonys';
  };
  attributes: {
    CandidateTestimony: Schema.Attribute.Component<
      'elements.candidate-testimony',
      true
    >;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContacts extends Struct.ComponentSchema {
  collectionName: 'components_elements_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    location: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
  };
}

export interface ElementsFaqsContainer extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs_containers';
  info: {
    displayName: 'faqsContainer';
  };
  attributes: {
    faq: Schema.Attribute.Component<'elements.question-answer', true>;
  };
}

export interface ElementsMediaPlatform extends Struct.ComponentSchema {
  collectionName: 'components_elements_media_platforms';
  info: {
    displayName: 'MediaPlatform';
  };
  attributes: {
    AccountName: Schema.Attribute.String;
    LinkToAccount: Schema.Attribute.String;
    PlatformName: Schema.Attribute.String;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    planPrice: Schema.Attribute.String;
    planType: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface ElementsProcesses extends Struct.ComponentSchema {
  collectionName: 'components_elements_processes';
  info: {
    displayName: 'Processes';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsProficiency extends Struct.ComponentSchema {
  collectionName: 'components_elements_proficiencies';
  info: {
    displayName: 'proficiency';
  };
  attributes: {
    caption: Schema.Attribute.String;
    proficiencyProof: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ElementsProficiencyProofs extends Struct.ComponentSchema {
  collectionName: 'components_elements_proficiency_proofs';
  info: {
    displayName: 'proficiencyProofs';
  };
  attributes: {
    proficiencyProof: Schema.Attribute.Component<'elements.proficiency', true>;
  };
}

export interface ElementsProofItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_proof_items';
  info: {
    displayName: 'ProofItem';
  };
  attributes: {
    context: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ElementsProofParagraph extends Struct.ComponentSchema {
  collectionName: 'components_elements_proof_paragraphs';
  info: {
    displayName: 'ProofParagraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsProofs extends Struct.ComponentSchema {
  collectionName: 'components_elements_proofs';
  info: {
    description: '';
    displayName: 'Proofs';
  };
  attributes: {
    ProofItem: Schema.Attribute.Component<'elements.proof-item', true>;
  };
}

export interface ElementsPropositionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_proposition_items';
  info: {
    displayName: 'PropositionItem';
  };
  attributes: {
    link: Schema.Attribute.String;
    service: Schema.Attribute.String;
  };
}

export interface ElementsPropositions extends Struct.ComponentSchema {
  collectionName: 'components_elements_propositions';
  info: {
    description: '';
    displayName: 'Propositions';
  };
  attributes: {
    PropositionItem: Schema.Attribute.Component<
      'elements.proposition-item',
      true
    >;
  };
}

export interface ElementsQuantityCaption extends Struct.ComponentSchema {
  collectionName: 'components_elements_quantity_captions';
  info: {
    displayName: 'quantityCaption';
  };
  attributes: {
    caption: Schema.Attribute.String;
    quantity: Schema.Attribute.String;
  };
}

export interface ElementsQuestionAnswer extends Struct.ComponentSchema {
  collectionName: 'components_elements_question_answers';
  info: {
    displayName: 'questionAnswer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface ElementsServiceItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_items';
  info: {
    displayName: 'ServiceItems';
  };
  attributes: {
    ServiceItem: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_medias';
  info: {
    description: '';
    displayName: 'SocialMedia';
  };
  attributes: {
    MediaPlatform: Schema.Attribute.Component<'elements.media-platform', true>;
  };
}

export interface ElementsTestimony extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonies';
  info: {
    displayName: 'Testimony';
  };
  attributes: {
    author: Schema.Attribute.String;
    authorImage: Schema.Attribute.Media<'images'>;
    organisation: Schema.Attribute.String;
    testimony: Schema.Attribute.Text;
  };
}

export interface ElementsTestimonys extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonys';
  info: {
    displayName: 'Testimonys';
  };
  attributes: {
    Testimony: Schema.Attribute.Component<'elements.testimony', true>;
  };
}

export interface ElementsTheNumbers extends Struct.ComponentSchema {
  collectionName: 'components_elements_the_numbers';
  info: {
    description: '';
    displayName: 'theNumbers';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    quantityCaption: Schema.Attribute.Component<
      'elements.quantity-caption',
      true
    >;
  };
}

export interface ElementsTrustedClientsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_trusted_clients_logos';
  info: {
    description: '';
    displayName: 'trustedClientsLogos';
  };
  attributes: {
    clientLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tag: Schema.Attribute.Text;
  };
}

export interface ElementsValuesContainer extends Struct.ComponentSchema {
  collectionName: 'components_elements_values_containers';
  info: {
    description: '';
    displayName: 'ValuesContainer';
  };
  attributes: {
    item1: Schema.Attribute.Component<'elements.card', true>;
    item2: Schema.Attribute.Component<'elements.card', true>;
    item3: Schema.Attribute.Component<'elements.card', true>;
    item4: Schema.Attribute.Component<'elements.card', true>;
    item5: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.candidate-cta': BlocksCandidateCta;
      'blocks.candidate-proofs': BlocksCandidateProofs;
      'blocks.candidate-testimonials': BlocksCandidateTestimonials;
      'blocks.candidate-why': BlocksCandidateWhy;
      'blocks.faqs': BlocksFaqs;
      'blocks.hero': BlocksHero;
      'blocks.hr-cta': BlocksHrCta;
      'blocks.hr-hero': BlocksHrHero;
      'blocks.hr-process': BlocksHrProcess;
      'blocks.hr-types': BlocksHrTypes;
      'blocks.missionvision': BlocksMissionvision;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'blocks.services': BlocksServices;
      'blocks.subscribe-footer': BlocksSubscribeFooter;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.values': BlocksValues;
      'blocks.why': BlocksWhy;
      'elements.button-link': ElementsButtonLink;
      'elements.candidate-testimony': ElementsCandidateTestimony;
      'elements.canditate-testimonys': ElementsCanditateTestimonys;
      'elements.card': ElementsCard;
      'elements.contacts': ElementsContacts;
      'elements.faqs-container': ElementsFaqsContainer;
      'elements.media-platform': ElementsMediaPlatform;
      'elements.pricing-card': ElementsPricingCard;
      'elements.processes': ElementsProcesses;
      'elements.proficiency': ElementsProficiency;
      'elements.proficiency-proofs': ElementsProficiencyProofs;
      'elements.proof-item': ElementsProofItem;
      'elements.proof-paragraph': ElementsProofParagraph;
      'elements.proofs': ElementsProofs;
      'elements.proposition-item': ElementsPropositionItem;
      'elements.propositions': ElementsPropositions;
      'elements.quantity-caption': ElementsQuantityCaption;
      'elements.question-answer': ElementsQuestionAnswer;
      'elements.service-items': ElementsServiceItems;
      'elements.social-media': ElementsSocialMedia;
      'elements.testimony': ElementsTestimony;
      'elements.testimonys': ElementsTestimonys;
      'elements.the-numbers': ElementsTheNumbers;
      'elements.trusted-clients-logos': ElementsTrustedClientsLogos;
      'elements.values-container': ElementsValuesContainer;
      'seo.meta-data': SeoMetaData;
    }
  }
}
