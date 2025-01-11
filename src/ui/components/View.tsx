import useFormStore from '../../store'
import useModalStore from '../../store/Modal'
import Button from './Button'
import Text from './Text'
import vCardsJS  from 'vcards-js';
const View = () => {
  const { formData } = useFormStore()
  const { updateModal } = useModalStore()
  // Handle backdrop click to close the modal
  const handleBackdropClick = (e:any) => {
    if (e.target === e.currentTarget) {
      updateModal(false)
    }
  }
  const HandlevCard = () => {
    const vCard = vCardsJS();
  
    // Set vCard details
    vCard.formattedName = formData?.Name || 'John Doe';
    vCard.cellPhone = formData?.Phone || '+91 1234567890';
    vCard.email = formData?.Email || 'johndoe@example.com';
    vCard.homeAddress = formData?.Address || 'James Street, India';
    vCard.organization=formData?.Organization || 'Wrk'
    vCard.title=formData?.Designation || 'Engineer'
    // Add photo if available
    if (formData?.image?.[0]) {
      const file = formData.image[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if(e.target && typeof e.target.result === 'string'){
          const base64Image = e.target.result;
          vCard.photo.embedFromString(base64Image.split(',')[1], 'image/jpeg'); // Embed photo as base64
          downloadVCard(vCard);
        }
        
      }; 
      reader.readAsDataURL(file);
    } else {
      downloadVCard(vCard);
    }
  };
  
  // Helper function to download vCard
  const downloadVCard = (vCard:any) => {
    const vCardData = vCard.getFormattedString(); // Get vCard as a string
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData?.Name || 'contact'}.vcf`;
    link.click();
  };
  
  // Generate image URL if an image file is uploaded
  const IMG_URL = formData.image && URL.createObjectURL(formData?.image[0])

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg_white rounded-lg shadow-xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing the modal
      >
        {/* Close Button */}
        <button
          onClick={() => updateModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="flex  flex-col gap-10 items-center">
          {/* Profile Image */}
          {IMG_URL ? (
            <img
              className="h-40 w-40 rounded-full object-cover"
              src={IMG_URL}
              alt="Profile"
            />
          ) : (
            <div className="h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}

          {/* User Details */}
          <div className="text-center ">
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Name || 'John Doe'}
            />
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Email || 'Johndoe@gmail.com'}
            />
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Phone || '+91 1234567811'}
            />
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Organization || '+91 1234567811'}
            />
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Designation || '+91 1234567811'}
            />
            <Text
              color="secondary"
              fontSize="large"
              text={formData?.Address || 'James Street, India'}
            />
          </div>
          <div className='flex flex-col gap-5'>
          <Button title='Download Now 🤑' type='dark' onSubmit={HandlevCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
