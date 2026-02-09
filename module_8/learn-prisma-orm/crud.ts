import { prisma } from "./lib/prisma";

async function createUser(){
  const user = await prisma.user.create({
    data:{
      name: "javi",
      email: "javir@example.com" // Add required fields based on your schema
    }
  });
  console.log("Created User: ", user)
  return user;

}

async function createPost(){
  const post=await prisma.post.create({
    data:{
      title:"My First Post",
      content:"This is the content of First",
      isPublished:true,
      authorId:1
    }
  })
  console.log("Created Post: ", post);
  return post;

}
async function createProfile(){
  const profile=await prisma.profile.create({
    data:{
      bio: "Software Developer",
      dob: new Date("1990-01-01"),
      userId:1
    }
  })
  console.log("Created Profile: ",profile);
  return profile;
}

async function getAllUsers(){
  const users=await prisma.user.findMany({
    include:{
      posts:true,
      profile:true
    }
  });
  console.dir(users, {depth: Infinity});
  return users;
}

async function getUserById(id:number){
  const user=await prisma.user.findUnique({
    where:{
      id
    }
  });
  console.dir(user, {depth: Infinity});
  return user;
}

async function geyUserParticularPost(id:number){
  const userp=await prisma.user.findUnique({
    where:{
      id
    },
    select:{
       posts:true,
      profile:true
    }
  });
  console.dir(userp, {depth: Infinity});
  return userp;
}

async function getPublishedPosts() {
  const posts=await prisma.post.findMany({
    where:{
      isPublished:true,
    }
  })
    console.log("Published Posts:", posts);
  return posts;
}

async function updateUser(id:number) {
  const user=await prisma.user.update({
    where:{
      id
    },
    data: {
      name: "Updated Name",
      email: "updated@example.com"
    }
  })
  console.log("Updated User:", user);
  return user;
}
async function updateUserpost(postId:number) {
  const user=await prisma.post.update({
    where:{
      postId
    },
    data: {
      title: "Updated Post",
      content: "Updated Content",
      isPublished:true
    }
  })
  console.log("Updated Post:", user);
  return user;
}

async function deleteUser(id:number) {
  const user=await prisma.user.delete({
    where:{id}
  })
   console.log("Deleted User:", user);
  return user;
}

async function upsertUser(email:string) {
  const user=await prisma.user.upsert({
    where:{
      email
    },
    update:{
      name:"Arnob"
    },
    create:{
      name:"Ghosh",
      email:email
    }
  })
    console.log("Upserted User:", user);
  return user;
}

async function main() {
  try{
    await getUserById(1);
  }
  catch(error){
    console.error("Error:", error);
  }
  finally{
    await prisma.$disconnect();
  }
}
main();