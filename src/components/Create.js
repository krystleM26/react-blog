import React, { useState } from "react";
import { useHistory } from "react-router-dom";



    

  return (
    <div className="create">
        <form className="createForm">
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                    <i class="fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" />
                <input type="text" placeholder="Title" />
            </div>
        </form>
      
    </div>
  );
};

export default Create;
