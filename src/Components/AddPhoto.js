import React, {Component} from 'react';

class AddPhoto extends Component {
   constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleSubmit(event) {
      event.preventDefault();
      const imageLink = event.target.elements.link.value;
      const description = event.target.elements.description.value;
      const post = {
         id: Number(new Date()),
         description: description,
         imageLink: imageLink
      }
      if (imageLink && description) {
         this.props.startAddingPost(post);
         this.props.onHistory.push('/');
      }
   }

   render() {
      return (
         <div className='add-post'>
            <div className="form">
               <form className="add-form" onSubmit={this.handleSubmit}>
                  <input type="type" placeholder="Link" name="link"/>
                  <input type="type" placeholder="Description" name="description"/>
                  <button> Post </button>
               </form>
            </div>
         </div>
      )
   }
}

export default AddPhoto;