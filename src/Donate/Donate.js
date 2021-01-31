import React from 'react';
import './Donate.css';
const donate = ()=>{
    return(
        <div className="main m-auto">
            <div className="pet-info">
                <div className="petImage">
                    <img alt="" className="mb-4" src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                </div>
                <div class="panel-heading">
							
                        <p><strong>Name:</strong>Sommy</p>
						</div>
						<div class="panel-body">
							<p><strong>Age:</strong>12</p>
							<p><strong>Location:</strong>12th Main Street London UK</p>
							<p><strong>Breed:</strong>Labrador</p>
						</div>
            </div>
            <hr></hr>
            <form>
                <div class="payment-input">
                    <div class="duration">
                        <p><strong>Select Duration</strong></p>
                        <select>
                            <option value="none">None</option>
                            <option value="1 month">1 month</option>
                            <option value="2 month">2 month</option>
                        </select>
                    </div>
                    <div class="amount">
                        <p><b>Amount:</b></p>
                        <input class="amt p-3"></input>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default donate;