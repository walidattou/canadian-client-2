import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    console.log('Starting email send process...');
    console.log('Form data:', formData);

    // Initialize EmailJS
    emailjs.init('47Sfd5g4f9BnD8uls');

    // Ensure EmailJS is initialized
    await new Promise(resolve => setTimeout(resolve, 100));

    console.log('EmailJS initialized, sending email...');

    // Template parameters: match template exactly
    const templateParams = {
      nom: (formData.nom || 'Non spécifié').trim(),
      prenom: (formData.prenom || 'Non spécifié').trim(),
      email: (formData.email || 'Non spécifié').trim().toLowerCase(),
      telephone: (formData.telephone || 'Non spécifié').trim(),
      adresse: (formData.adresse || 'Non spécifié').trim(),
      ville: (formData.ville || 'Non spécifié').trim(),
      codePostal: (formData.codePostal || 'Non spécifié').trim(),
      ville2: (formData.ville2 || 'Non spécifié').trim(),
      services: (formData.services || 'Non spécifié').trim(),
      servicesChoisis: (formData.servicesChoisis || 'Aucun service additionnel').trim()
    };

    console.log('Template params:', templateParams);

    // Send email with new service key
    const result = await emailjs.send(
      'service_s8qxfzc',     // New service ID
      'template_gmlhh5g',    // Template ID
      templateParams,
      '47Sfd5g4f9BnD8uls'    // Public key
    );

    console.log('Email sent successfully:', result);
    return { success: true, result };

  } catch (error) {
    console.error('Email send failed:', error);
    console.error('Error details:', {
      status: error?.status,
      text: error?.text,
      message: error?.message,
      stack: error?.stack
    });
    return { success: false, error };
  }
};
