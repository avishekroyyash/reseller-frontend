"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { sellerJobEdit } from "@/lib/action/SellerJobEdit";

export default function EditProductModal({ item }) {
// console.log(item,'EDIT ITEM');
  const router = useRouter();

  const handleEdit = async (e) => {
    e.preventDefault();

    const id = item._id;
//    console.log(id,'PRODUCT ID ');
    const formData = new FormData(e.currentTarget);

    const editData = Object.fromEntries(formData.entries());

    editData.price = Number(editData.price);
    editData.stock = Number(editData.stock);
    
     const data = await sellerJobEdit(id,editData)
    //  console.log(data,'AFTER EDIT DATA ');
    //  toast.success("Product updated successfully");
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(editData),
    //   }
    // );

    // const data = await res.json();

    if (data.acknowledged) {
      toast.success("Product updated successfully");
      router.refresh();
    } else {
      toast.error(data.message || "Update failed");
    }
  };

  return (
    <Modal>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white"
        variant="secondary"
      >
        <FiEdit size={18} /> 
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-3xl">

            <Modal.CloseTrigger />

            <Modal.Header>
             <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <FiEdit size={20} />
              </div>

              <Modal.Heading>Edit Product</Modal.Heading>

              <p className="text-sm text-gray-500">
                Update your product information.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">

              <Surface>

                <form
                  onSubmit={handleEdit}
                  className="space-y-6"
                >
                  {/* Product Title */}

                  <TextField
                    isRequired
                    name="title"
                    defaultValue={item.title}
                  >
                    <Label>Product Title</Label>

                    <Input
                      placeholder="Product Title"
                      className="border-2 border-orange-400"
                    />
                  </TextField>

                  {/* Description */}

                  <TextField
                    isRequired
                    name="description"
                    defaultValue={item.description}
                  >
                    <Label>Description</Label>

                    <TextArea
                      placeholder="Product description..."
                      className="border-2 border-orange-400"
                    />
                  </TextField>

                  {/* Category + Condition */}

                  <div className="grid md:grid-cols-2 gap-5">

                    <Select
                      name="category"
                      defaultValue={item.category}
                    >
                      <Label>Category</Label>

                      <Select.Trigger className="border-2 border-orange-400">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Electronics">
                            Electronics
                          </ListBox.Item>

                          <ListBox.Item id="Fashion">
                            Fashion
                          </ListBox.Item>

                          <ListBox.Item id="Books">
                            Books
                          </ListBox.Item>

                          <ListBox.Item id="Furniture">
                            Furniture
                          </ListBox.Item>

                          <ListBox.Item id="Sports">
                            Sports
                          </ListBox.Item>

                          <ListBox.Item id="Others">
                            Others
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select
                      name="condition"
                      defaultValue={item.condition}
                    >
                      <Label>Condition</Label>

                      <Select.Trigger className="border-2 border-orange-400">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Brand New">
                            Brand New
                          </ListBox.Item>

                          <ListBox.Item id="Like New">
                            Like New
                          </ListBox.Item>

                          <ListBox.Item id="Good">
                            Good
                          </ListBox.Item>

                          <ListBox.Item id="Fair">
                            Fair
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                  </div>

                  {/* Price + Stock */}

                  <div className="grid md:grid-cols-2 gap-5">

                    <TextField
                      isRequired
                      name="price"
                      defaultValue={item.price}
                    >
                      <Label>Price ($)</Label>

                      <Input
                        type="number"
                        placeholder="Price"
                        className="border-2 border-orange-400"
                      />
                    </TextField>

                    <TextField
                      isRequired
                      name="stock"
                      defaultValue={item.stock}
                    >
                      <Label>Stock</Label>

                      <Input
                        type="number"
                        placeholder="Stock"
                        className="border-2 border-orange-400"
                      />
                    </TextField>

                  </div>

                  {/* Image */}

                  <TextField
                    isRequired
                    name="image"
                    defaultValue={item.image}
                  >
                    <Label>Image URL</Label>

                    <Input
                      placeholder="https://..."
                      className="border-2 border-orange-400"
                    />
                  </TextField>

                  <Modal.Footer>

                    <Button
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Update Product
                    </Button>

                  </Modal.Footer>

                </form>

              </Surface>

            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}