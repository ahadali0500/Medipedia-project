"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
export default function Popup() {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <div>
                <button onClick={onOpenModal}>Open modal</button>
                <Modal  open={open} onClose={onCloseModal} center>
                    <div className="sign-up-form">
                        <h2> Medipedia</h2>
                        <br />
                        <form className="form-wrap">
                            <div className="form-floating form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailAddress"
                                    placeholder="Username"
                                    defaultValue=""
                                    required=""
                                />
                                <label htmlFor="emailAddress" className="form-label">
                                    Username
                                </label>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="main-btn border-0">
                                    <span>Submit</span>
                                </button>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="main-btn border-0">
                                    <span>Apply for code</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
}
