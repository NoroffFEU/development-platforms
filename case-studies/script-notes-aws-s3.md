Welcome to my video case study on development platforms, my name is Karl and I am a
second year student at FE2 online campus.

This video case study will showcase AWS S3 as a platform used for solo developers,
but it can also be used by small businesses and big corporations.

I will talk about S3 and it's uses for a solo dev and small businesses and how it can help to
keep costs down for short and long term storage.
but first off, What is AWS?

- AWS, or Amazon Web services, launched in 2006 with only 3 services. Storage buckets,
  Compute instances and a Messaging queue. It has since grown into a massive
  cloud computing platform used to manage and maintain hardware and infrastructure of resources,
  with well over 200 services available to help developers, scientists, engineers and companies run
  their apps, store their data and make calculations with scalability in mind.

-Many of the services offered can reduce the expense and complexity of purchasing and running
resources on-site,
and removes the need for on-site server rooms and maintenance,
which can be quite expensive if you are a solo dev or a small company.

Now, onto the main course of this video.

S3

What is S3?

-S3 stands for Simple Storage Service and was the very first service offered by
AWS back in 2006 and it is based on the same infrastructure as the Amazon eCommerce site.

- it is designed for durability and saves data for millions of apps for businessess and
  developers all over the world using storage buckets and objects.

Objects are the fundamental entities stored in S3 and it consists of the data and metadata of the file,
image or movie you uploaded to storage. However,
S3 cannot access the content or data inside the object,
only read the metadata associated with it, if you were to access the object it would
look like this(show browser view with metadata).
To access and view the files in storage we have to use other services within AWS,
which i will showcase later in the video.

-S3 is an object storage service from Amazon that provides industry-leading scalability,
data availability, security and performance.

S3 storage is easily scalable and offers multiple tiers for storage and pricing. for example,
in the same bucket i showed you just a moment ago i have stored a single image,
this image would cost me less than a dollar a month to store.
If i where to increase the amount of images, the price would scale together
with the size of data for each stored gigabyte.
As you can see here on the pricing page for AWS S3,
the price per GB is currently $0.023, up to 50 TB. That means if i were to max out the 50 TB,
it would cost me $1150, but as a solo dev, i would have to work really hard to
fill that storage with files i access frequently.

S3 stores files as objects, and it can store images,
text documents and videos at relatively low cost. The standard S3 storage tier costs
about $0.023 per GB up to 50 TB the first month.

Benefits of S3

- Performance, scalability, availability, and durability that are unrivaled in the industry.

- Many cost-effective storage classes are available.

- Security, compliance, and auditing capabilities that are unrivaled.

- Manage data and access permissions with ease.

- Query-in-place and on-demand processing.

- The most widely used cloud storage service.

Objects and Buckets in S3 -- Objects

- Objects are fundamental entities stored in Amazon S3

- It consists of its data as well as its metadata.

- S3 cannot access the content or data inside the object.

- It can only read the metadata associated with the object.

- It allocates a uniqe version ID for the object when some data is added to the bucket.

Objects and Buckets in S3 -- Buckets

- Buckets are the containers where objects are stored and then uploaded to Amazon S3

- There will never be an object without a Bucket.

- There is no "Windows Explorer" like hierarchy.

- One can create Buckets in any region of the World which is close to you.

---

- IAM = Identity and Access Management
- ACLs = Access Control Lists

Photo album sdk
