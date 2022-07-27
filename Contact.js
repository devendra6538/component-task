class Contact {
    static render() {
        return `
            <h2>Contact Me :-</h2>
            <hr />
            <input type='text' required placeholder='Enter First Name'>
            <input type='text'required placeholder='Enter Last Name'>
            <br />
            <br />
            <input type='email' required placeholder='Enter Email'>
            <input type='number' required placeholder='Enter Phone Number'>
            <br />
            <br />
            <input type='checkbox' required />
            <span>I accept the term and conditions.</span>
            <br />
            <br />
            <button>Submit</button>
            `
    }
}