import ImageUpload from "../../../componanent/AdminComponent/info-card.component";
import { CheckBox, DropDown, RadioButton, TextInputWithLabel } from "../../../componanent/AdminComponent/formComponent/input.component";
import TextEditor from "../../../componanent/AdminComponent/text-editor.component";
import AdminLayout from "../../../view/commen/DefaultLayout/AdminLayout";

export default function AdminAddProduct() {
    return (
        <>
            <AdminLayout>
                <div className="flex justify-center">
                    <div className="lg:w-1/2 bg-white p-5 border rounded-xl">
                        <h4 className="text-xl">Product form</h4>
                        <hr className="mt-5" />
                        <TextInputWithLabel labelName="Title" gap="py-3" />


                        <div className="flex gap-x-5">
                            <TextInputWithLabel labelName="Categories" gap="py-3" />
                            <TextInputWithLabel labelName="Unit" gap="py-3" />
                            <TextInputWithLabel labelName="Badge" gap="py-3" />
                        </div>

                        <div className="py-3 h-32 mt-10">
                            <p>Description</p>
                            <TextEditor />
                        </div>
                        <div className="flex gap-3 mt-32">


                        </div>



                        <div className="py-3">


                            <div className="flex justify-end gap-3">
                                <button className="primary-btn w-fit hover:w-fit">Save & Edit</button>
                                <button className="primary-btn w-fit hover:w-fit">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white p-5 border rounded-xl">
                        <div>
                            <label htmlFor="">Uploda image</label>
                            <p className="text-gray-500 text-xs">Only you can upload maximum 3 pictures</p>
                            <ImageUpload cardName={""} cardValue={""} cardColor={""} />
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}