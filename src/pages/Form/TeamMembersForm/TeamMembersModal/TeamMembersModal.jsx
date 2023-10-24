import { memo } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const TeamMembersModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
        XHello world!
      </Modal>
    </div>
  );
};

const Memoized = memo(TeamMembersModal);

const Styled = styled(Memoized)``;

export default Styled;
