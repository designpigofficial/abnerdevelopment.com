import { Flex, Box } from "@chakra-ui/react";

const Projects = () => (
  <>
    <Flex align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
      <Box
        maxW="800px"
        w="80%"
        h="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="rgba(0,0,0,0.2)"
        backdropFilter="auto"
        backdropBlur="6px"
        border="1px"
        borderColor="pink.300"
        borderRadius="lg"
        shadow="xl"
        mt="100px"
      >
        hello
      </Box>
    </Flex>
  </>
);

export default Projects;
