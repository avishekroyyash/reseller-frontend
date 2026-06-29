"use client";

import { AlertDialog, Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
import { sellerJobDelete } from "@/lib/action/SellerJobDel";

export default function DeleteProduct({ item }) {
  const router = useRouter();

  const handleDelete = async () => {

   const data =  await sellerJobDelete(item._id)
   //console.log(data,'DATA');
   

      if (data.acknowledged) {
        toast.success("Product deleted successfully.");
        router.refresh();
      } else {
        toast.error(data.message || "Failed to delete product.");
      }
    
  };

  return (
    <AlertDialog>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white"
        size="sm"
      >
     <FiTrash2 size={18} />
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">

                <TrashBin />
              </div>

              <AlertDialog.Heading>
                Delete Product?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-gray-600">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-gray-900">
                  {item.title}
                </span>
                ?
              </p>

              <p className="mt-2 text-sm text-gray-500">
                This action is permanent and cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button
                slot="close"
                onPress={handleDelete}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Delete Product
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}