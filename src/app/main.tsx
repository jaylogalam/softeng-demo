import Text from "@/components/text";
function Main() {
  return (
    <div className="p-8 transition-all duration-300 ease-in-out">
      <Text variant="hero"> Hero </Text>
      <Text variant="title"> Title </Text>
      <Text variant="subtitle"> Subtitle </Text>
      <Text variant="body"> Body </Text>
      <Text variant="highlight"> Highlight </Text>
      <Text variant="caption"> Caption </Text>
    </div>
  );
}

export default Main;
