import React, { useEffect, useState } from "react";
import Portal from "../../ui/Portal";
import Modal from "../../ui/Modal";

const Main = ({ setIsOpen, isOpen, id, children, data, choices, unchoices, choice }) => {
  console.log(data)
  return (
    <main>
      {children}
      <Portal>
        {isOpen && <Modal setIsOpen={setIsOpen} id={id} data={data} isChoice={choice?.includes(id)}
            choices={choices}
            unchoices={unchoices}/>}
      </Portal>
    </main>
  );
};

export default Main;
