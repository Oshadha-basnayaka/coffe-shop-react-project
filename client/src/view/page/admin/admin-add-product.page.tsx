"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../commen/DefaultLayout/AdminLayout";
import { TextInputWithLabel } from "../../../componanent/AdminComponent/formComponent/input.component";
import TextEditor from "../../../componanent/AdminComponent/text-editor.component";
import ImageUpload from "../../../componanent/AdminComponent/formComponent/image-upload.component";
import { Controller, useForm } from "react-hook-form";
interface Category {
  id: number;
  name: string;
}

interface Product {
  name: string;
  category: number;
  qty: string;
  price: string;
  description: string;
}

export default function AdminAddProduct() {
  const [productImages, setProductImages] = useState<any[]>([]);
  const { register, handleSubmit, control } = useForm();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product>({
    name: "",
    category: 0,
    qty: "",
    price: "",
    description: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image,setImage] = useState(null);

  const fetchCategoryData = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/category");
    setCategories(response.data.data);
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // const { name, value } = e.target;
    // setProduct({ ...product, [name]: value, category: parseInt(value), qty: value, price: value });
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  async function onSubmit(data: any) {
    if(!image) return;
    const form = new FormData();
    form.append("profileImage",image)
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/product",
        { ...data, category: selectedCategory, ...form },{
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // data: { ...data, category: selectedCategory, ...form }
        }
      );
      console.log("Product saved:", response.data);
      alert("Product saved successfully!");
    } catch (error) {
      console.error("There was an error saving the product:", error);
      alert("Failed to save product.");
    }
    console.log(data);
  }

  console.log(image)

  return (
    <>
      <AdminLayout>
        {/* <form action="" onSubmit={handleSubmit(onSubmit)}> */}
          <div className="flex justify-center">
          <form action="" onSubmit={handleSubmit(onSubmit)} >

            <div className="lg:w-1/2 bg-white p-5 border rounded-xl">
              <h4 className="text-xl">Product Form</h4>
              <hr className="mt-5" />
              <Controller
                name="name"
                control={control}
                render={({ field }: any) => (
                  <TextInputWithLabel {...field} labelName="Name" gap="py-3" />
                )}
              />
              {/* <TextInputWithLabel labelName="Name" gap="py-3" value={product.name} onChange={handleInputChange} name="name" /> */}

              <div className="flex gap-x-5">
                <select
                  onChange={handleInputChange}
                  id="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {categories.map((element: any) => (
                    <option value={element._id}>{element.categoryName}</option>
                  ))}
                </select>
                {/* <select name="category" value={product.category} onChange={handleInputChange}>
                  <option value="">Select a category</option>
                  {categories.map((category:any) => (
                    <option key={category.id} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select> */}
                <Controller
                  name="qty"
                  control={control}
                  render={({ field }: any) => (
                    <TextInputWithLabel {...field} labelName="Qty" gap="py-3" />
                  )}
                />
                <Controller
                  name="price"
                  control={control}
                  render={({ field }: any) => (
                    <TextInputWithLabel
                      {...field}
                      labelName="Price"
                      gap="py-3"
                    />
                  )}
                />
                {/* <TextInputWithLabel labelName="Qty" gap="py-3" value={product.qty} onChange={handleInputChange} name="qty" />
                <TextInputWithLabel labelName="Price" gap="py-3" value={product.price} onChange={handleInputChange} name="price" /> */}
              </div>

              <div className="py-3 h-32 mt-10">
                {/* <p>Description</p> */}
                <Controller
                  name="description"
                  control={control}
                  render={({ field }: any) => (
                    <TextInputWithLabel
                      {...field}
                      labelName="Description"
                      gap="py-3"
                    />
                  )}
                />
                {/* <TextEditor value={product.description} onChange={handleDescriptionChange} /> */}
              </div>
              <div className="flex gap-3 mt-32"></div>

              <div className="py-3">
                <div className="flex justify-end gap-3">
                  <button className="primary-btn w-fit hover:w-fit">
                    Save
                  </button>
                </div>
              </div>
            </div>
            </form>
            <div className="bg-white p-5 border rounded-xl">
              <div>
                <label htmlFor="">Upload image</label>
                <p className="text-gray-500 text-xs">
                  You can upload a maximum of 3 pictures
                </p>
                <ImageUpload setImage={setImage} />
              </div>
            </div>
          </div>
        {/* </form> */}
      </AdminLayout>
    </>
  );
}
