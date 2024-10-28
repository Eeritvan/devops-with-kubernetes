# exercise 3.06

## Setup
#### DBaaS
- Pros: Easier to set up since the service is likely really well integrated.
- Cons: Limited customizability and being locked into the provider's ecosystem. It might be harder to migrate elsewhere later.

#### DIY
- Pros: Easy to customize and optimize to your needs. Can easily be deployed elsewhere if needed.
- Cons: More complex and time-consuming to set up. Also requires some expertise and knowledge to get it working properly.



## Costs
#### DBaaS
- Pros: Expenses can be easier to predict and calculate since you are billed monthly/annually. For instance, Google Cloud also has a calculator and you are only billed for the configuration you choose, so costs are consistent and easy to predict. 
- Cons: Can be more expensive long-term, especially once more services are implemented to the database. Also, scaling might become expensive.

#### DIY
- Pros: More cost-effective in the long term.
- Cons: Higher maintenance and support costs if something goes wrong. Therefore, costs can be harder to predict since you never know if something is going to break.



## Maintenance
#### DBaaS
- Pros: Offloads maintenance such as scaling and monitoring to the provider. The provider might also offer extensive documentation and resources to help maintain the database. For example, Google Cloud seems to provide many tutorial videos and resources to manage, for instance, PSQL via Google Cloud SQL. Some higher tiers or paid plans also provide 24/7 support to resolve critical issues.
- Cons: Limited access and control over the system since many of the actions are handled by the provider. Fine-tuning or optimizing the systems running the database can be off-limits.

#### DIY
- Pros: Complete control and access to systems. You can optimize and fine-tune every detail of the system for the best possible performance. You are also able to choose how the database is run and how scaling, monitoring, and patching are done.
- Cons: Requires expertise and knowledge about the system and database. There is also an increased risk of downtime if something goes wrong.



## Backups
#### DBaaS
- Pros: Can offer automatic backups. For example, Google Cloud offers automatic backups to the database. The recovery process can also be simpler since everything is integrated together.
- Cons: The backups might need some storage which you have to buy from the provider, adding to the total costs.

#### DIY
- Pros: Full control over backups. You can choose how the backups are made and where they are stored. You also get to decide which tools are used to make backups and how the recovery process is executed.
- Cons: Requires some time to study and create the systems for the backups. The process can also be more prone to mistakes or errors.



## Performance
#### DBaaS
- Pros: Reliable and easy to use. For example, Google Cloud offers CLI and web-based dashboards to monitor the performance of the database. Providers can also have auto-scaling options to keep the database operational.
- Cons: Limited access to optimizing the server and some parameters.

#### DIY
- Pros: Complete flexibility over performance. You have access to all the server optimizations and control over scaling strategies.
- Cons: Requires some time and planning to execute properly. Might also require some attention and care to keep the database up and running even if load grows.