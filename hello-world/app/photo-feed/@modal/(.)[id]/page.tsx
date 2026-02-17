import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wander";
import Modal from "@/app/components/modal"

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
    </Modal>
  );
}