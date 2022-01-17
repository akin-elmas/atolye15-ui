import React, { useState } from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import cn from "classnames";

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  return (
    <div
      className={cn(styles.Card, {
        [styles.Card__show]: isOpen,
      })}
    >
      <div className={styles.Header}>
        <div class={styles.Header__user}>
          <div class={styles.Header__user__date}>
            13 Jun 2022 / 12:30 - 13:30{" "}
          </div>
          <div class={styles.Header__user__mail}>
            <span className={styles.Header__user__mail__name}>
              {props.name} -
            </span>
            {props.mail}
          </div>
        </div>
        <div className={styles.Header__description}>
          <p>{props.title}</p>
        </div>
      </div>
      <div
        className={cn(styles.Card__content, {
          [styles.Card__content__show]: isOpen,
        })}
      >
        <h3>QUESTIONS</h3>
        <p>{props.content}</p>
        <h3>AVAILABILITY</h3>
        <p>Wed, 12 Jan 2022 / 11:45</p>
      </div>
      <div
        className={cn(styles.Card__action, {
          [styles.Card__action__show]: isOpen,
        })}
      >
        <Button
          variation="underline"
          children="Details"
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className={styles.Card__action__right}>
          <Button variation="empty" children="Details">
            Reject
          </Button>
          <Button variation="success" children="Accept" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  mail: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  //date: PropTypes.instanceOf(Date),
};

Card.defaultProps = {
  name: "Jane Doe",
  mail: "janedoe@example.com",
  title: "UX meeting for Atolye15.com design",
  content: "Please share anything that will help prepare for our meeting.",
};
export default Card;
