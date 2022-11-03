import React, { useEffect, useState } from "react";
import Portal from "../../ui/Portal";
import Modal from "../../ui/Modal";

const Main = ({ setIsOpen, isOpen, id, children, data }) => {
  return (
    <main>
      {children}
      <Portal>
        {isOpen && <Modal setIsOpen={setIsOpen} id={id} data={data} />}
      </Portal>
    </main>
  );
};

export default Main;
