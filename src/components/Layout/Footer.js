import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.copyright}>Copyright © {(new Date().getFullYear())}. All rights reserved.</div>
    );
}

export default Footer;