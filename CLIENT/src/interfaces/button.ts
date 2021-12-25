export enum EButtonClass {
  buttonAdd = "button--add",
  buttonDelete = "button--delete",
  buttonEdit = "button--edit",
  buttonPage = "button--page",
  buttonRound = "button--round",
  buttonDisabled = "button--disabled"
}

export const getClassName = (className: string | undefined) => {
  switch (className) {
    case EButtonClass.buttonAdd: {
      className = EButtonClass.buttonAdd;
      break;
    }
    case EButtonClass.buttonEdit: {
      className = EButtonClass.buttonEdit;
      break;
    }
    case EButtonClass.buttonDelete: {
      className = EButtonClass.buttonDelete;
      break;
    }
    case EButtonClass.buttonPage: {
      className = EButtonClass.buttonPage;
      break;
    }
    case EButtonClass.buttonRound: {
      className = EButtonClass.buttonRound;
      break;
    }
    case EButtonClass.buttonDisabled: {
      className = EButtonClass.buttonDisabled;
      break;
    }
  };
  return className;
};
