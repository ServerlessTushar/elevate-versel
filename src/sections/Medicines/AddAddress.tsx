import FloatingSection from "./FloatingSection";
import AddressForm from "./AddressForm";

const AddAddress = () => {
  return (
    <FloatingSection data={<AddressForm />}>
      <button className="w-full border-[1px] border-[#EA6F54] rounded-md text-[#EA6F54] py-2">
        + Add Address
      </button>
    </FloatingSection>
  );
};

export default AddAddress;
