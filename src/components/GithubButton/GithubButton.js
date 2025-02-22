import React, { useState, useEffect } from "react";
import styles from './GithubButton.module.css';

const GithubButton = props => {
    return (
        <button className={styles.githubBtn}>
            <a className={styles.githubLink} href="https://github.com/muyiwer/pokematch" target="_blank">
                <img className={styles.githubImg} alt="GitHub Logo" src={require("../../resources/images/github.PNG")} />
                <h3>Olumuyiwa Aro</h3>
            </a>
        </button>
    )
}

export default GithubButton;