import React from "react"

const Contact = () =>{
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <textarea class="form-control" id="validationTextarea" placeholder="Type Here..."></textarea>
                </div><br />
                <button type="submit" class="btn btn-primary">Send Us</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;