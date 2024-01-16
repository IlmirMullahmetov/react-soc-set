import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {

//   let state = props.store.getState().dialogsPage;

//   let newMessageBody = state.newMessageBody;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };
//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogs 
//     updateNewMessageBody = {onNewMessageChange}
//     sendMessage = {onSendMessageClick}
//     dialogsPage = {state}
//     />
//   );
// }

let mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) =>{
  return  {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    

  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

