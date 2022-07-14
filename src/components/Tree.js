import React from "react";
import user from "../images/user.png";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

const Tree = (props) => {
    const contact = props.contacts;
    const Head = contact.filter((item) => {
        if (item.position === "Head") {
            return item;
        }
    })
    const TeamHr1 = contact.filter((item) => {
        if (item.dept === "HR" && item.team === "1") {
            return item;
        }
    })

    const TeamHr2 = contact.filter((item) => {
        if (item.dept === "HR" && item.team === "2") {
            return item;
        }
    })

    const TeamEng1 = contact.filter((item) => {
        if (item.dept === "Engineering" && item.team === "1") {
            return item;
        }
    })
    const TeamEng2 = contact.filter((item) => {
        if (item.dept === "Engineering" && item.team === "2") {
            return item;
        }
    })

    const TeamDesign1 = contact.filter((item) => {
        if (item.dept === "Design" && item.team === "1") {
            return item;
        }
    })
    const TeamDesign2 = contact.filter((item) => {
        if (item.dept === "Design" && item.team === "2") {
            return item;
        }
    })




    return (
        <div className="container">
           <div>
                <ul> <h2><FaCaretDown />CEO</h2>
                    <li>
                        <h2>{Head.map((item) => {
                            if (item.dept === "HR") {
                                return <div className="teams">
                                    <li><FaCaretRight />{item.position} of staff/HR</li>
                                    <li>
                                        <div class="ui horizontal list">
                                            <div class="item">
                                                <img class="ui avatar image" src={user} />
                                                <div class="content">
                                                    <div class="header"><h4>{item.name}</h4></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            }

                        })}</h2>
                        <ul><h3><FaCaretDown />Team 1</h3>
                            {TeamHr1.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                        <ul><h3><FaCaretDown />Team 2</h3>
                            {TeamHr2.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                    </li>
                    <li><h2>{Head.map((item) => {
                        if (item.dept === "Engineering") {
                            return <div className="teams">
                                <li><FaCaretRight />{item.position} of Engineering</li>
                                <li>
                                    <div class="ui horizontal list">
                                        <div class="item">
                                            <img class="ui avatar image" src={user} />
                                            <div class="content">
                                                <div class="header"><h4>{item.name}</h4></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        }

                    })}</h2>
                        <ul><h3><FaCaretDown />Team 1</h3>
                            {TeamEng1.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                        <ul>{TeamEng2.map((item) => { if (item.length > 0) return <h3>Team 2</h3> })}
                            {TeamEng2.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                    </li>
                    <li><h2>{Head.map((item) => {
                        if (item.dept === "Design") {
                            return <div className="teams">
                                <li><FaCaretRight />{item.position} of Design</li>
                                <li>
                                    <div class="ui horizontal list">
                                        <div class="item">
                                            <img class="ui avatar image" src={user} />
                                            <div class="content">
                                                <div class="header"><h4>{item.name}</h4></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        }

                    })}</h2>
                        <ul><h3><FaCaretDown />Team 1</h3>
                            {TeamDesign1.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                        <ul>{TeamDesign2.map((item) => { if (item.length > 0) return <h3>Team 2</h3> })}
                            {TeamDesign2.map((item) => {
                                return <div className="list-content">
                                    <div class="ui horizontal list ">
                                        <div className="item">
                                            <img className="ui avatar image" src={user} />
                                            <div className="content content-user">
                                                <div className="header">{item.position}</div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tree;