// const refs = {
//     feedbackForm: document.querySelector('.js-feedback-form'),
// };

// let formData = {};

// const fillFeedbackFormFields = () => {
//     const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

//     if (formDataFromLS === null) {
//         return;
//     }

//     formData = formDataFromLS;

//     const formDataFromLSKeys = Object.keys(formDataFromLS);

//     formDataFromLSKeys.forEach(key => {
//         refs.feedbackForm.elements[key].value = formDataFromLS[key];
//     });
// };

// fillFeedbackFormFields();

// const onFeedbackFormFieldChange = ({ target: formField }) => {
//     const formFieldName = formField.name;
//     const formFieldValue = formField.value.trim();

//     formData[formFieldName] = formFieldValue;

//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// const onFeedbackFormSubmit = event => {
//     event.preventDefault();

//     const { target: feedbackForm } = event;

//     feedbackForm.reset();
//     localStorage.removeItem('feedback-form-state');
// };

// refs.feedbackForm.addEventListener('change', onFeedbackFormFieldChange);
// refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);