import { connect, StringCodec } from 'nats'

const handleSubscription = async (sub: any) => {
    const sc = StringCodec();
    for await (const m of sub) {
        const msg = sc.decode(m.data);
        await fetch(process.env.WEBHOOK_URL!, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: msg })
        });
    }
}

const main = async () => {
    try {
        const nc = await connect({ servers: process.env.NATS_URL || 'nats://my-nats.default.svc.cluster.local:4222' });
        const subscription = nc.subscribe('prod', { queue: 'todos-queue'});
        await handleSubscription(subscription);
    } catch (error) {
        console.log(error);
    }
}

main();