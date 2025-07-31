// app/api/v1/persons-by-psn/route.ts
import {NextRequest, NextResponse} from 'next/server';
import ConsumerApi from "@/utils/ConsumerApi";


const allowedOrigin = '*'; // or '*' if you want to allow all

const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-ROAD-CLIENT',
};

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const psn = searchParams.get('psn');
        if (!psn) {
            return NextResponse.json({ error: 'Missing psn' }, { status: 400 });
        }
        const res = await ConsumerApi.get(`/consumer/person/psn/${psn}`);

        return new NextResponse(JSON.stringify(res.data), {
            status: 200,
            headers: corsHeaders,
        });
    } catch (error: any) {
        console.log(error)
        console.error('X-Road call failed:', error?.response?.data || error.message);
        return new NextResponse(
            JSON.stringify({ error: 'Failed to fetch data from consumer API' }),
            { status: 500, headers: corsHeaders }
        );
    }
}
