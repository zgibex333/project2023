import {
    addCommentFormActions,
    addCommentFormReducer,
} from './model/slice/addCommentFormSlice';
import { AddCommentFormSchema } from './model/types/addCommentForm';
import { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async';

export type { AddCommentFormSchema };
export { addCommentFormActions, addCommentFormReducer };
export { AddCommentForm };
