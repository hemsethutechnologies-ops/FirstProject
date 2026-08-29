/**
 * Submits form data to a remote Excel/Google Sheets endpoint.
 * Requires VITE_EXCEL_API_URL to be set in .env
 *
 * @param {Object} data - The form data object to send
 * @param {string} formName - The name of the form (e.g. 'Contact', 'Enrollment')
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export const submitToExcel = async (data, formName = 'Generic Form') => {
  const apiUrl = import.meta.env.VITE_EXCEL_API_URL;

  if (!apiUrl) {
    console.warn('VITE_EXCEL_API_URL is not defined in .env. Form submission simulated.');
    return true; // Simulate success if URL is not configured
  }

  try {
    const payload = {
      ...data,
      formName,
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error(`Error submitting ${formName}:`, error);
    return false;
  }
};
