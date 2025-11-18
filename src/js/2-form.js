const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
};
let formData = {
    email: '',
    message: '',
};

const fillFeedbackForm = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataFromLS === null) {
        return;
    }
    formData = formDataFromLS;
    const formDataFromLSKeys = Object.keys(formDataFromLS);
    formDataFromLSKeys.forEach(key => {
        refs.feedbackForm.elements[key].value = formDataFromLS[key];
    });
};
fillFeedbackForm();

const onFeedbackFormInput = ({ target: formField }) => {
    const formFieldName = formField.name;
    const formFieldValue = formField.value.trim();
    formData[formFieldName] = formFieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    const emailField = refs.feedbackForm.elements.email;
    const messageField = refs.feedbackForm.elements.message;
    if (emailField.value.trim() === "" || messageField.value.trim() === "") {
        alert("Fill please all fields");
        return;
    }
    const { target: feedbackForm } = event;
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
}

refs.feedbackForm.addEventListener('input', onFeedbackFormInput);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
